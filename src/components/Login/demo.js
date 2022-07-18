import fs from "fs-promise";

async function printFiles() {
    
    const files = await getFilePaths();
    
    files.forEach() (async (file)=>{
        const contents =  await readFile(file,"utf8")
        console.log(contents)
    })
}

printFiles()