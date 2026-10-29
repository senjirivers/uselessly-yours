// 상품 초안(products-draft.json)을 data.js 로 합치는 스크립트. node build-data.js <초안.json>
const fs = require("fs");
const draft = JSON.parse(fs.readFileSync(process.argv[2] || "products-draft.json", "utf8"));
const base = fs.readFileSync(__dirname + "/data.base.js", "utf8");
const out = base.replace("/*PRODUCTS*/[]", JSON.stringify(draft.products, null, 1)).replace("/*SIGNALS*/{}", JSON.stringify(draft.signals, null, 1));
fs.writeFileSync(__dirname + "/data.js", out);
console.log("products:", draft.products.length);
