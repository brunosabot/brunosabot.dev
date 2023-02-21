"use client";

import React, { useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import {
  v1 as uuidv1,
  v4 as uuidv4,
  v5 as uuidv5,
  validate as uuidValidate,
} from "uuid";
import { ulid } from "ulid";
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
  ULID = "ulid",
}

export default function ToolUuidPage() {
  const [uuid, setUuid] = useState("");
  const [uuidType, setUuidType] = useState<UuidType>(UuidType.V1);
  const [name, setName] = useState<string>("");
  const [namespace, setNamespace] = useState<string>("");
  const [length, setLength] = useState<number>(21);

  const createUuid = useCallback(
    (
      type: UuidType,
      localName: string,
      localNamespace: string,
      length: number
    ) => {
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
        setUuid(nanoid(length));
      } else if (type === UuidType.ULID) {
        setUuid(ulid());
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

  const onChangeLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.valueAsNumber);
  };

  useEffect(() => {
    createUuid(uuidType, name, namespace, length);
  }, [createUuid, name, namespace, uuidType, length]);

  return (
    <>
      <PageTitle>UUID Tool</PageTitle>

      <Label label="Algorithm">
        <Select onChange={onChangeType} value={uuidType}>
          <Option value={UuidType.V1}>UUID Version 1</Option>
          <Option value={UuidType.V4}>UUID Version 4</Option>
          <Option value={UuidType.V5}>UUID Version 5</Option>
          <Option value={UuidType.NANOID}>Nano ID</Option>
          <Option value={UuidType.ULID}>ULID</Option>
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

      {uuidType === UuidType.NANOID ? (
        <Label label="NanoID length">
          <Input type="number" onChange={onChangeLength} value={length} />
        </Label>
      ) : null}

      <SimpleCard>{uuid}</SimpleCard>

      <Button
        type="button"
        onClick={() => createUuid(uuidType, name, namespace, length)}
      >
        Generate another one
      </Button>

      <SimpleCard>
        The tool is a unique identifier generator that helps you quickly and
        easily generate ids based on four different formats: UUID V1, UUID V4,
        UUID V5, Nano ID and ULID. UUID V1 uses the current time and the
        device&apos;s MAC address to generate a unique id, while UUID V4 uses
        random numbers. UUID V5 uses a secure hash function to generate a unique
        id based on a given namespace and name, and Nano ID uses a secure random
        number generator to generate a compact and URL-friendly id.
        <br />
        The tool provides a simple and intuitive interface for generating ids in
        each of these formats, allowing you to choose the best format for your
        needs. The ids are generated in real-time, making it easy to see the
        results and make any necessary adjustments. Whether you&apos;re a
        developer, data analyst, or simply need to generate unique ids, this
        tool is a must-have tool for your toolkit. With its flexible and
        easy-to-use interface, you can generate ids in any of the four formats
        with just a few clicks.
      </SimpleCard>
    </>
  );
}
