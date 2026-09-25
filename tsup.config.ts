import { defineConfig } from "tsup";

export default defineConfig({
	entry: { index: "src/components/popover/index.ts" },
	format: ["cjs", "esm"],
	target: "es2019",
	dts: true,
	sourcemap: true,
	clean: true,
	external: ["react", "react-dom"],
});
