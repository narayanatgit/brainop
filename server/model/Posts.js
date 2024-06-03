const sql=require('../dbconnect/dbconnect')


async function posts()
{

    const result= await  sql`CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        body JSONB
    );`

}

async function insert()
{

       const resposne=await fetch('https://dummyjson.com/products')
       .then(res => res.json())
       .then();
     resposne.products.map(async (item)=>{

            const resulti=await sql`insert into posts (body) values (${item})`
})
       
}

module.exports={posts,insert}