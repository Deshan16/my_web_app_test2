import Express, { Request, Response } from "express";
import Path from "path";

const app = Express();
const PORT = process.env.PORT || 3000;

app.get("/", (_request: Request, response: Response) => {
    response.send("<h1>Backend is running</h1>");
});

app.get("/page/:name", (request: Request, response: Response) => {
    const file = request.params.name;
    const filePath = Path.join(__dirname, "html", file);
    
    response.sendFile(filePath, (error) => {
        if (error) 
            response.status(404).send("<h1>Page not found</h1>");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});