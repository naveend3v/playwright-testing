// // HTML - Hyper Text Markup Language

// Name         ID            Email ID//////////Header - 3 Title
// Malathi      01           malathi@gmail.com - 1st row , 3 column
// Abinaya      02           abinaya@gmail.com - 2nd row , 3 column
// Sudha        03           sudha@gmail.com   - 3rd row , 3 column
//                                              Total Datas - 9

// table thead tr th
// table tbody tr td

{/* <html> //tagName - PINK colour - open
    <table> //table - PINK colour - open
        <thead> //table header - header (title) - PINK colour - open
            <tr> //table row - PINK colour - open - tagName
                <th>Name</th> //table head
                <th>ID</th> 
                <th>Email ID</th>
            </tr> //closed
        </thead> //closed
        <tbody> //table body - to find data - P `INK colour - open
            <tr> //1st row
                <td>Malathi</td> //table data
                <td>01</td> 
                <td>malathi@gmail.com</td>
            </tr>
            <tr> //2nd row
                <td>Abinaya</td> //table data
                <td>02</td> 
                <td>abinaya@gmail.com</td>
            </tr>
            <tr> //3rd row
                <td>Sudha</td> //table data
                <td>03</td> 
                <td>sudha@gmail.com</td>
            </tr>
        </tbody> //closed
    </table> //closed
</html> //closed tagName
 */}
 
/* 1.⁠ ⁠All data - //table /tbody /tr /td
2.⁠ ⁠row data - //table /tbody /tr [index] /td
3.⁠ ⁠column data - //table /tbody /tr /td [index]
4.⁠ ⁠particular data - //table /tbody /tr [index] /td [index]
5.⁠ ⁠header - //table /thead /tr /th */


//A table is an HTML <table> element that display data in a structure format of rows <tr> and column <td>/<th> which can be automatically to locate reada validate and intract with the data
import { test, expect } from '@playwright/test';
import console from 'node:console';

test('table', async ({ page }) => {
  await page.goto('https://letcode.in/table');

  const alldata = await page.locator("//table/tbody/tr/td").allTextContents()
  console.log("alldata",alldata)
  console.log("alldata",alldata.length)

  const rowdata = await page.locator("//table /tbody /tr[4]/td").allTextContents()
  console.log("rowdata",rowdata)
  console.log("rowdata",rowdata.length)

  const coldata = await page.locator("//table /tbody /tr /td [3]").allTextContents()
  console.log("coldata",coldata)
  console.log("coldata",coldata.length)

  const particulardata = await page.locator("//table /tbody /tr [3] /td [1]").allTextContents()
  console.log("particulardata",particulardata)
  console.log("particulardata",particulardata.length)

  const header = await page.locator("//table /thead /tr /th").allTextContents()
  console.log("header",header)
  console.log("header",header.length)

})


// using css selectors:
// import { test } from '@playwright/test';

test('table2', async ({ page }) => {

await page.goto('https://www.leafground.com/table.xhtml');

console.log(await page.locator("table tbody td").allTextContents());

console.log(await page.locator("table tbody tr:nth-child(4) td").allTextContents());

console.log(await page.locator("table tbody tr td:nth-child(3)").allTextContents());

console.log(await page.locator("table tbody tr:nth-child(3) td:nth-child(1)").allTextContents());

console.log(await page.locator("table thead th").allTextContents());

const rowCount = await page.locator("table tbody tr").count();

const colCount = await page.locator("table thead th").count();

const allData = await page.locator ("table tbody td").allTextContents();

console.log("Row Count:", rowCount);

console.log("Column Count:", colCount);

console.log("All Data Count:", allData.length);

});

// below code session taken by Ganesh tutor
test('table3', async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const rows =await page.locator('table tbody tr');
    console.log(await rows.count());
    for(let i=0; i < await rows.count(); i++){
        const colms = await rows.nth(i).locator('td');
        for(let j=0;j<await colms.count();j++){
            if(j==2){
                const text = await colms.nth(j).textContent();
            console.log(text);
            }
            
        }
    }
})

test('table task',async({page})=>{
    await page.goto('https://letcode.in/table')
    const header = await page.locator('table[matsort] thead')
    console.log('Total header :', await header.count())
    console.log('Headers are :',await header.allTextContents())

    const rows = await page.locator('table[matsort] tr')
    console.log('Total rows :', await rows.count())
    
    for(let i = 0; i < await rows.count(); i++){
        const columns = await rows.nth(i).locator('td')
        // console.log('Total columns :', await columns.count())
        console.log(await columns.allTextContents())
        /* 
        // To access each individual elements:
        for(let j=0; j < await columns.count(); j++){
            console.log(`Row : ${i}, Column : ${j}`)
            console.log(await columns.nth(j).allTextContents())
        }
         */
    }


})