/* @refresh reload */
import "windi.css";

import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";

import DevTools from "../../library/src/solid-js/DevTools";
import { Component, createSignal } from "solid-js";

const Button: Component = () => {
	const [enabled, setEnabled] = createSignal(true, {
		// name: "enabled",
	});

	return (
		<button onClick={() => setEnabled(!enabled())}>
			{enabled() ? "Enabled" : "Disabled"}
		</button>
	);
};

const Abb: Component = () => {
	return (
		<>
			<Button />
			<Button />
			<Button />
		</>
	);
};

render(
	() => (
		<DevTools>
			<Abb />
		</DevTools>
	),
	document.getElementById("root") as HTMLElement
);
