/* Book Ordering System:
Develop a program for a bookstore that calculates the price of a book based on the customer's membership status
and the quantity purchased. Apply discounts as follows:
Regular customers get no discount.
Silver members get a 10% discount.
Gold members get a 20% discount.
Platinum members get a 30% discount. */
import { number, select } from "@inquirer/prompts";
let user_cardInput = await select({
    message: "Please select mebership status",
    choices: [
        { name: "1", value: "Silver membership", description: "Silver membership" },
        { name: "2", value: "Gold membership", description: "Gold membership" },
        { name: "3", value: "Platinum membership", description: "Platinium membership" },
        { name: "4", value: "No membership", description: "No membership" },
    ],
});
let usercardInput = String(user_cardInput);
let book_nums = await number({
    message: "Sytem: Enter total quantity of books purchased",
});
let tot_bookspurchased = Number(book_nums);
let Total_books_price = tot_bookspurchased * 100;
if (usercardInput === "Silver membership" && tot_bookspurchased >= 5) {
    const discountPercentage = 0.10; // 10% discount for bills above $10
    let total_discount = Total_books_price * (1 - discountPercentage);
    console.log(`You get a 10% discount! New total: ${total_discount}`);
}
else if (usercardInput === "Gold membership" && tot_bookspurchased > 5) {
    const discountPercentage = 0.20; // 20% discount for bills above $10
    let total_discount = Total_books_price * (1 - discountPercentage);
    console.log(`You get a 20% discount! New total: ${total_discount}`);
}
else if (usercardInput === "Platinum membership" && tot_bookspurchased > 3) {
    const discountPercentage = 0.30; // 30% discount for bills above $10
    let total_discount = Total_books_price * (1 - discountPercentage);
    console.log(`You get a 30% discount! New total: ${total_discount}`);
}
else {
    let total_discount = Total_books_price;
    console.log(`You are not eligible for discount, Total is ${total_discount}`);
}
