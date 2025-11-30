import Express, { Request, Response } from "express";
import Path from "path";

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.static(Path.join(__dirname, "html")));

app.get("/", (_request: Request, response: Response) => {
    response.sendFile(Path.join(__dirname, "html", "file1.html"));
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