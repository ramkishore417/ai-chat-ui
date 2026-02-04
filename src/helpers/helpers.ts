import { readWelcomeMessage } from "../api/api";

/**
 * Extracts the welcome message from a GenericResponse object.
 * Returns the resultObj as a string, or a default message if not present.
 */
export async function getWelcomeMessage(): Promise<string> {
    const result = await readWelcomeMessage();

    return String(result.resultObj);
}
