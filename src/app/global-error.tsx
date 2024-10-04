"use client";

export default function GlobalError(props: { error?: unknown }) {
  console.log("there was an error:", props.error);

  return <div>{(props.error as Error).message}</div>;
}
