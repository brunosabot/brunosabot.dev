import React, { useCallback, useEffect, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Option from "../../components/form/Option";
import Select from "../../components/form/Select";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import {
  v1 as uuidv1,
  v4 as uuidv4,
  v5 as uuidv5,
  validate as uuidValidate,
} from "uuid";
import { nanoid } from "nanoid";
import SimpleCard from "../../components/card/SimpleCard";
import Button from "../../components/form/Button";
import NavigationBack from "../../components/header/NavigationBack";

enum UuidType {
  V1 = "v1",
  V4 = "v4",
  V5 = "v5",
  NANOID = "nanoid",
}

export default function Uuid() {
  const [uuid, setUuid] = useState("");
  const [uuidType, setUuidType] = useState<UuidType>(UuidType.V1);
  const [name, setName] = useState<string>("");
  const [namespace, setNamespace] = useState<string>("");

  const createUuid = useCallback((type, localName, localNamespace) => {
    if (type === UuidType.V1) {
      setUuid(uuidv1());
    } else if (type === UuidType.V4) {
      setUuid(uuidv4());
    } else if (type === UuidType.V5) {
      if (uuidValidate(localNamespace)) {
        setUuid(uuidv5(localName, localNamespace));
      } else {
        setUuid("");
      }
    } else if (type === UuidType.NANOID) {
      setUuid(nanoid());
    }
  }, []);

  const onChangeType = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as UuidType;

      setUuidType(value);
      console.log(value, namespace);
      createUuid(value, name, namespace);
    },
    []
  );

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setName(value);
    createUuid(uuidType, value, namespace);
  }, []);

  const onChangeNamespace = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setNamespace(value);
      createUuid(uuidType, name, value);
    },
    []
  );

  useEffect(() => {
    createUuid(uuidType, name, namespace);
  }, []);

  return (
    <DefaultLayout type="short">
      <SEO
        description="UUID and Nano ID Generation tool by Bruno Sabot"
        title="UUID tool - Bruno Sabot"
      />
      <PageTitle>UUID Tool</PageTitle>
      <NavigationBack />

      <Label label="Algorithm">
        <Select onChange={onChangeType} value={uuidType}>
          <Option value={UuidType.V1}>UUID Version 1</Option>
          <Option value={UuidType.V4}>UUID Version 4</Option>
          <Option value={UuidType.V5}>UUID Version 5</Option>
          <Option value={UuidType.NANOID}>Nano ID</Option>
        </Select>
      </Label>

      {uuidType === UuidType.V5 ? (
        <Label label="Name">
          <Input onChange={onChangeName} value={name} />
        </Label>
      ) : null}

      {uuidType === UuidType.V5 ? (
        <Label label="Namespace">
          <Input
            onChange={onChangeNamespace}
            value={namespace}
            aria-invalid={uuidValidate(namespace) === false}
          />
        </Label>
      ) : null}

      <SimpleCard>{uuid}</SimpleCard>

      <Button
        type="button"
        onClick={() => createUuid(uuidType, name, namespace)}
      >
        Generate another one
      </Button>
    </DefaultLayout>
  );
}
