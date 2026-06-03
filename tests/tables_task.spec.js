// Name      ID   Email ID           Age    // Header - 4 Title
// Naveen    01   naveen@gmail.com   29     - 1st row, 4 column
// Hema      02   hema@gmail.com     28     - 2nd row, 4 column
// Arjun     03   arjun@gmail.com    27     - 3rd row, 4 column
// Latha     04   latha@gmail.com    29     - 3rd row, 4 column
// Total Datas - 16

{/* <html> //tagName - PINK colour - open
    <table> //table - PINK colour - open
        <thead> //table header - header (title) - PINK colour - open
            <tr> //table row - PINK colour - open - tagName
                <th>Name</th> //table head
                <th>ID</th> 
                <th>Email ID</th>
                <th>Age</th>
            </tr> //closed
        </thead> //closed
        <tbody> //table body - to find data - P `INK colour - open
            <tr> //1st row
                <td>Naveen</td> //table data
                <td>01</td> 
                <td>naveen@gmail.com</td>
                <td>29</td>
            </tr>
            <tr> //2nd row
                <td>Hema</td> //table data
                <td>02</td> 
                <td>hema@gmail.com</td>
                <td>28</td>
            </tr>
            <tr> //3rd row
                <td>Arjun</td> //table data
                <td>03</td> 
                <td>arjun@gmail.com</td>
                <td>27</td>
            </tr>
            <tr> // 4th row
                <td>Latha</td> //table data
                <td>04</td> 
                <td>latha@gmail.com</td>
                <td>29</td>
            </tr>
        </tbody> //closed
    </table> //closed
</html> 
 */}



import {test, expect} from '@playwright/test'

test('tables_task', async({page}) => {
    await page.goto('https://www.leafground.com/table.xhtml;jsessionid=node01nv2djr5yzj89rwox4qz5g78715791282.node0')

    const header = await page.locator('table thead tr th').allTextContents()
    console.log('header', header)
})