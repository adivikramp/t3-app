/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { api } from "~/trpc/react";
import { Todo } from "./Todo";

export function Todos() {
  const { data: todos, isLoading, isError } = api.todo.all.useQuery()

  if (isLoading) return <div>Loading Todos</div>
  if (isError) return <div>Error getting Todos</div>
  if (!todos) return <div>No todos found</div>;

  return (
    <>
      {todos.length ? todos?.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      }) : "Create Your first Todo....."}
    </>
  );
}
