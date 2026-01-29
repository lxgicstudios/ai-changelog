#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const fs = __importStar(require("fs"));
const program = new commander_1.Command();
program
    .name("ai-changelog")
    .description("Generate a clean changelog from git history using AI")
    .version("1.0.0")
    .requiredOption("--from <ref>", "Start tag, branch, or commit")
    .requiredOption("--to <ref>", "End tag, branch, or commit (default: HEAD)", "HEAD")
    .option("-o, --output <file>", "Write output to file instead of stdout")
    .action(async (opts) => {
    try {
        const changelog = await (0, index_1.generateChangelog)({
            from: opts.from,
            to: opts.to,
            output: opts.output,
        });
        if (opts.output) {
            fs.writeFileSync(opts.output, changelog);
            console.log(`\nWritten to ${opts.output}`);
        }
        else {
            console.log("\n" + changelog);
        }
    }
    catch (err) {
        console.error("Error:", err.message);
        process.exit(1);
    }
});
program.parse();
