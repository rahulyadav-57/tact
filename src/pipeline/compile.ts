import { CompilerContext } from "../context";
import { createABI } from "../generator/createABI";
import { writeProgram } from "../generator/writeProgram";

export async function compile(ctx: CompilerContext, name: string) {
    let abi = createABI(ctx, name);
    let output = await writeProgram(ctx, abi);
    let cOutput = output;
    return { output: cOutput, ctx };
}