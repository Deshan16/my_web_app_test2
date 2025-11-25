"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "html")));
app.get("/", (_request, response) => {
    response.sendFile(path_1.default.join(__dirname, "html", "file1.html"));
});
app.get("/page/:name", (request, response) => {
    const file = request.params.name;
    const filePath = path_1.default.join(__dirname, "html", file);
    response.sendFile(filePath, (error) => {
        if (error)
            response.status(404).send("<h1>Page not found</h1>");
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
