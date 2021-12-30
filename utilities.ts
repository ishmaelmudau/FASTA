import fs from "fs";

export function numbers() {
    return strings().map((s) => parseInt(s));
}

export function stdin() {
    return fs.readFileSync(0, "utf-8");
}

export function strings(): string[] {
    return stdin().split("\n");
}