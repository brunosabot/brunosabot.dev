"use client";

import React, { useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import {
  v1 as uuidv1,
  v4 as uuidv4,
  v5 as uuidv5,
  validate as uuidValidate,
} from "uuid";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Input from "../../../../../components/form/Input";
import Select from "../../../../../components/form/Select";
import Option from "../../../../../components/form/Option";
import Button from "../../../../../components/form/Button";

enum UuidType {
  V1 = "v1",
  V4 = "v4",
  V5 = "v5",
  NANOID = "nanoid",
}

export default function ToolUuidPage() {
  const [uuid, setUuid] = useState("");
  const [uuidType, setUuidType] = useState<UuidType>(UuidType.V1);
  const [name, setName] = useState<string>("");
  const [namespace, setNamespace] = useState<string>("");

  const createUuid = useCallback(
    (type: UuidType, localName: string, localNamespace: string) => {
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
    },
    []
  );

  const onChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUuidType(e.target.value as UuidType);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNamespace = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamespace(e.target.value);
  };

  useEffect(() => {
    createUuid(uuidType, name, namespace);
  }, [createUuid, name, namespace, uuidType]);

  return (
    <>
      <PageTitle>UUID Tool</PageTitle>

      <SimpleCard>
        This tool is aimed to generate ids based on the UUID V1, UUID V4, UUID
        V5 and Nano ID formats
      </SimpleCard>

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
    </>
  );
}
