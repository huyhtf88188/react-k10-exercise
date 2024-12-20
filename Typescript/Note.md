## cài đặt

```bash
npm i typescript -g
```

## tạo file tsconfig.json

```bash
tsc --init
```

Cấu hình tsconfig.json

```json
{
	"compilerOptions": {
		"target": "es5",
		"module": "commonjs",
		"outDir": "./dist",
		"rootDir": "./src",
		"strict": true,
		"esModuleInterop": true
	}
}
```

- Thực hiện biên dịch với config:

```bash
tsc
```

## Thực hiện biên dịch:

```bash
tsc index.ts
```

## watch mode

```bash
tsc index.ts --watch
```
