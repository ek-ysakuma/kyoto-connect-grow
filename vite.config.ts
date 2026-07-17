// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // 1. フロントエンド（Vite）のアセット読み込みパスを設定
    base: '/kyoto-connect-grow/',
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  // 2. サーバー（Nitro）側のベースパスも明示的に上書きして同期させます
  nitro: {
    baseURL: '/kyoto-connect-grow/',
  }
});
