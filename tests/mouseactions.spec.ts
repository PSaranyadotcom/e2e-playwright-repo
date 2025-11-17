import { test,expect } from "@playwright/test";
import { strict } from "assert";
import { setPriority } from "os";
test("mouse actions-hover", async ({page})=>{
    await page.goto("https://playwright.dev/");
    const b=await page.getByText("Get started");
    await b.hover()
    await b.click({button:"right"})


})
test("dbl click", async ({page})=>{
    await page.goto("https://qa-practice.netlify.app/double-click");
    await page.locator("#double-click-btn").dblclick()
    await expect(page.locator("#double-click-result")).toHaveText("Congrats, you double clicked!")
    await page.close()

})

test("drag nd drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   const src= await page.locator("#draggable")
    const dest=await page.locator("#droppable")
    await src.dragTo(dest);//approach 1
    await page.setViewportSize({
        height:1000,
        width:1200
    });
    //slider operations
   const slider= await page.locator('#slider-range span').first()
   slider.focus()
   for(let i=0;i<100;i++){
    await page.keyboard.press("ArrowRight");
   }

    await src.hover(); //approach 2
    await page.mouse.down()
    await dest.hover()
    await page.mouse.up()
    await page.waitForTimeout(6000)
    await page.close()

})

test("right click", async ({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const btn=await page.locator(".context-menu-one.btn.btn-neutral")
    await btn.click({button:"right"});
    const del=await page.locator(".context-menu-icon-delete")
    await del.click()
    await page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.close();
});

test("mouse move", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByText("SVG Elements").scrollIntoViewIfNeeded();
    const slider= await page.locator('#slider-range span').first()
    const box=await slider.boundingBox();
    if(box){
        const x=box.x + box.width/4;
        const y=box.y + box.height/4;
          await page.mouse.down();
       await page.mouse.move(x+100,y, {steps:20});
        await page.mouse.up();
          await page.waitForTimeout(1000);
   }
});

test("text selection", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const text=await page.locator("#text-to-select");
    await text.click();
    await page.keyboard.down("Shift");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.up("Shift");
});
test("scrolling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#HTML9 > div.widget-content > p:nth-child(6)").scrollIntoViewIfNeeded({timeout:2000});

});

// test("sidebars", async ({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const slider= await page.locator('#slider-range span').first()
//     const box=await slider.boundingBox();
//     if(box){
//         const x=box.x + box.width/2;
//         const y=box.y + box.height/2;
//         await page.mouse.move(x,y);
//     }
// });



test("keyboard actions", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
  await page.keyboard.press("CapsLock");
await page.keyboard.press("Tab");
await page.keyboard.press("Shift+Tab");
await page.keyboard.press("Meta+A");
await page.keyboard.press("Delete");
await page.keyboard.press("Enter");
await page.keyboard.type("Hello World");   // ✅ fixed this line
await page.keyboard.press("ArrowLeft");
await page.keyboard.press("Control+ArrowRight");
await page.keyboard.press("Shift+ArrowRight");
await page.keyboard.press("Backspace");
await page.keyboard.press("Control+A");
await page.keyboard.press("Escape");
await page.keyboard.press("F2");
await page.keyboard.press("Alt+F4");
await page.keyboard.press("Space");
await page.keyboard.down('Shift');
await page.keyboard.type('hello world');
await page.keyboard.up('Shift');


    await page.close();
})