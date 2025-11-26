"use client";

import { Box, Hash, Settings, User } from "lucide-react";
import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState } from "react";
import { ulid } from "ulid";
import {
  v1 as uuidv1,
  v4 as uuidv4,
  v5 as uuidv5,
  validate as uuidValidate,
} from "uuid";

import Button from "../../../../../../generic/common/Button";
import ResultCard from "../../../../../../generic/common/ResultCard";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import SelectWithIcon from "../../../../../../generic/form/SelectWithIcon";
import classes from "./ToolUuid.module.css";

enum UuidType {
  NANOID = "nanoid",
  ULID = "ulid",
  V1 = "v1",
  V4 = "v4",
  V5 = "v5",
}

export default function ToolUuid() {
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
      length: number,
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
    [],
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
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <SelectWithIcon
          Icon={Settings}
          label="Algorithm"
          onChange={onChangeType}
          value={uuidType}
        >
          <option value={UuidType.V1}>UUID Version 1</option>
          <option value={UuidType.V4}>UUID Version 4</option>
          <option value={UuidType.V5}>UUID Version 5</option>
          <option value={UuidType.NANOID}>Nano ID</option>
          <option value={UuidType.ULID}>ULID</option>
        </SelectWithIcon>

        {uuidType === UuidType.V5 ? (
          <InputWithIcon
            Icon={User}
            label="Name"
            onChange={onChangeName}
            value={name}
          />
        ) : null}

        {uuidType === UuidType.V5 ? (
          <InputWithIcon
            aria-invalid={uuidValidate(namespace) === false}
            Icon={Box}
            label="Namespace"
            onChange={onChangeNamespace}
            value={namespace}
          />
        ) : null}

        {uuidType === UuidType.NANOID ? (
          <InputWithIcon
            Icon={Hash}
            label="NanoID length"
            onChange={onChangeLength}
            type="number"
            value={length}
          />
        ) : null}
      </div>

      <ResultCard>{uuid}</ResultCard>

      <div className={classes.Actions}>
        <Button
          onClick={() => createUuid(uuidType, name, namespace, length)}
          type="button"
        >
          Generate another one
        </Button>
      </div>
    </div>
  );
}
