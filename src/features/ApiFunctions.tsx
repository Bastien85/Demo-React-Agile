export async function getMethod(url : string) {
    try{
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        return [];
    }
}
