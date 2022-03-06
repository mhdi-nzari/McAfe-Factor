//------------------->>>>>>>>>>>>>>>>>>  variable
// access into the list item

//# section_one
const firstBoxBtn = document.querySelector(".get--Information"),
  // get info button
  btnGetInfo = document.querySelector("#base--info"),
  // get product--info
  btnProductInfo = document.querySelector("#product--info"),
  // btn enter date
  date = document.querySelector("#data"),
  // btn print first page
  printBtn = document.querySelector("#print-btn"),
  //# section_one

  // inforamation form input
  //# section two

  // input reciver name
  reciver = document.querySelector("#reciver"),
  // input  postall
  validatePostalCode = document.querySelector("#postal_code"),
  // input ostan
  state = document.querySelector("#state"),
  // input phone-number
  number = document.querySelector("#number"),
  // input city
  city = document.querySelector("#city"),
  // input addressBar
  addressBar = document.querySelector("#address--bar"),
  //# section two

  // btn print first page
  //#setion five
  button_print = document.querySelector(".button--manage__print"),
  button_manage = document.querySelector(".button--manage"),
  //#setion five

  // access into common class
  // tbody element at table
  tableBody = document.querySelector("tbody"),
  // tableBodyField = document.querySelectorAll(".table--td"),
  information__form__input = document.querySelectorAll("input"),
  // select tr and td remove item
  table_th = document.querySelector("table thead tr th:last-child"),
  col_span = document.querySelector("[colspan='5']");
// remove item

var ticketI = document.getElementById("totalTicketCost").textContent;
var PriceProduct = document.getElementById("totalTicketCost").textContent;

//------------------->>>>>>>>>>>>>>>>>> addEventlistenrs

// if click on the btn run function
events();
function events() {
  btnGetInfo.addEventListener("click", validateReciveName),
    btnProductInfo.addEventListener("click", getInfoProduct),
    date.addEventListener("click", datepicker),
    // remove element when page printed
    (window.onbeforeprint = function () {
      firstBoxBtn.style.display = "none";
      button_manage.style.display = "none";
      table_th.remove();

      const tabletd = document.querySelectorAll("table tbody tr td:last-child");
      tabletd.forEach((element) => {
        element.remove();
      });

      col_span.setAttribute("colspan", "4");
    });
  tableBody.addEventListener("click", removeSingle);
  // tableBody.addEventListener("click", tableProduct);
  printBtn.addEventListener("click", printPage),
    button_print.addEventListener("click", printPage);

   
}

// if clicked run functions

//------------------->>>>>>>>>>>>>>>>>> functions

function validateReciveName() {
  while (1) {
    // alert for enter recipient_name
    recipient_name = prompt("نام گیرنده را وارد کنید ");

    // if not null or aqual ' '
    if (recipient_name !== "" && recipient_name.trim().length !== 0) {
      reciver.value = recipient_name;
      setTimeout(() => {
        validatesPostalCode();
      }, 300);

      break;
    } else if (recipient_name) {
      // user typed something and hit OK
      alert("کاربر گرامی نام فیلد نباید خالی  باشد.");
    } else {
      // user hit cancel
    }
  }
}
function validatesPostalCode() {
  while (1) {
    // alert for enter postall code
    let postall_code_prompt = prompt("کد پستی مورد نظر را وارد نمایید ");
    // if not null or aqual ' '

    if (postall_code_prompt !== "" && !isNaN(postall_code_prompt)) {
      validatePostalCode.value = postall_code_prompt;
      setTimeout(() => {
        validateState();
      }, 300);
      break;
    } else if (postall_code_prompt) {
      alert("کاربر گرامی کدپستی فقط با اعداد مجاز است");
    } else {
      // user hit cancel
    }
  }
}
function validateState() {
  while (1) {
    // alert for enter postall code
    let state_prompt = prompt("استان مورد نظر خود را وارد نمایید");
    if (state_prompt !== "" && state_prompt.trim().length !== 0) {
      state.value = state_prompt;
      setTimeout(() => {
        validatePhoneNumber();
      }, 300);
      break;
    } else if (state_prompt) {
      alert("کاربر گرامی استان موردنظر نباید خالی یا عدد باشد.");
    } else {
      // user hit cancel
    }
  }
}
function validatePhoneNumber() {
  while (1) {
    // alert for enter postall code
    let number_prompt = prompt("شماره موبایل گیرنده  مورد نظر را وارد نمایید ");
    // if not null or aqual ' '
    let matchnumber = number_prompt.match(/[^\W][^09]?\d{10,11}/gi);
    if (number_prompt !== "" && !isNaN(number_prompt)) {
      number.value = number_prompt;
      setTimeout(() => {
        validateCity();
      }, 300);
      break;
    } else if (number_prompt) {
      alert("کاربر گرامی شماره تلفن فقط با اعداد مجاز است");
    } else {
      // user hit cancel
    }
  }
}
function validateCity() {
  while (1) {
    // alert for enter postall code
    let city_prompt = prompt("شهرستان مورد نظر خود را وارد نمایید");
    let matchPattern = city_prompt.match(/\d+/g);
    if (
      city_prompt !== "" &&
      matchPattern === null &&
      city_prompt.trim().length !== 0
    ) {
      city.value = city_prompt;
      setTimeout(() => {
        validateAddressBar();
      }, 300);

      break;
    } else if (city_prompt) {
      alert("کاربر گرامی شهرستان موردنظر نباید خالی یا عدد باشد.");
    } else {
      // user hit cancel
    }
  }
}
function validateAddressBar() {
  while (1) {
    // alert for enter postall code
    let addressBar_prompt = prompt("آدرس مورد نظر خود را وارد نمایید");
    // let matchPattern = addressBar_prompt.match(/\d+/g);  matchPattern !== null &&
    if (
      addressBar_prompt !== "" &&
      addressBar_prompt.trim().length !== 0
    ) {
      addressBar.value = addressBar_prompt;

      break;
    } else if (addressBar_prompt) {
      alert("کاربر گرامی آدرس موردنظر نباید خالی یا عدد باشد.");
    } else {
      // user hit cancel
    }
  }
}
// get inforamtion product
function getInfoProduct() {
  let productInfo = {
    product: prompt("لطفا نام محصول را وارد نمایید."),
    numberOfProduct: prompt("لطفا تعداد محصول را وارد نمایید."),
    staticPrice: prompt("لطفا قیمت محصول را وارد نمایید.") + " تومان",
    row: document.querySelectorAll("tbody tr"),
  };

  templateMake(productInfo);
}
// for edit or change information customer with click on field
for (let index = 0; index < information__form__input.length; index++) {
  information__form__input[index].addEventListener("click", function (e) {
    while (1) {
      let newValue = prompt("لطفا مقدار جدید خود را وارد نمایید.");
      if (newValue !== "") {
        e.target.value = newValue;
        break;
      } else if (newValue) {
      } else {
      }
    }
  });
}
// set datepicker
function datepicker() {
  let datePickerPrompt = prompt(" تاریخ مورد نظر را وارد نمایید ");
  let issueDate = document.querySelector(".issue--date__date");

  // #section between one & two
  issueDate.textContent = datePickerPrompt;
}
// make template html
function templateMake(product) {
  let table = product.row.length;
  const tbody = document.querySelector("table tbody");
  let table_row = document.createElement("tr");
  let multiplication =
    product.staticPrice.substring(0, product.staticPrice.length - 5) *
    product.numberOfProduct;

  table_row.innerHTML = `
  <tr>
  <td>${table + 1}</td>
                     <td class=".table--td" >${product.product}</td>
                     <td class=".table--td" id="quantity">${
                       product.numberOfProduct
                     }</td>
                     <td class="price table--td" id="varPrice>${
                       product.staticPrice
                     }</td>
                     <td class="totalPrice.table--td" id="totalTicketCost" >${multiplication} تومان </td>
                     
                     <td> <a class="remove" href="javascript:void(0)"> <img src="./src/img/close.svg" alt="remove-item"></a></td>
                     </tr> `;
  tbody.appendChild(table_row);
}
// remove single item
function removeSingle(e) {
  if (e.target.parentElement.classList.contains("remove")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
}



const length = document.querySelectorAll("#quantity");
const ticketC = document.getElementById("varPrice").textContent;
length.forEach((element) => {
  element.addEventListener("click", function (e) {
    const pro = prompt("مقدار را وارد نمایید.");
    e.target.textContent = pro;

    var ticketCost = parseInt(ticketC.substring(0, ticketC.length - 5));
    if (pro !== null) {
      let priceNew = Number(parseInt(pro) * parseInt(ticketCost));
      const hasClass = e.target.parentElement.querySelector("#totalTicketCost");
      if (hasClass) {
        hasClass.textContent = priceNew += " تومان ";
        ticketCost.textContent += " تومان ";
      } else {
        console.log(false);
      }
    }
  });
});

const staticPrice = document.querySelectorAll("#varPrice");
staticPrice.forEach((element) => {
  element.addEventListener("click", function (e) {
    const quantity =
      e.target.parentElement.querySelector("#quantity").textContent;
    const promptPrice = prompt("مقدار را وارد نمایید.");
    e.target.textContent = promptPrice;

    if (promptPrice !== null) {
      let finalPrice = parseInt(promptPrice) * parseInt(quantity);
      const hasClass = e.target.parentElement.querySelector("#totalTicketCost");
      console.log(hasClass);
      if (hasClass) {
        hasClass.textContent = finalPrice += " تومان ";
        e.target.textContent += " تومان";
      } else {
        console.log(false);
      }
    }
  });
});

const productName  = document.querySelectorAll('.productName ')
productName.forEach(element => {
 element.addEventListener('click' , ((e)=>{
  let productN = prompt("نام محصول خود را وارد نمایید.");
  if (productN !== '') {
    e.target.textContent  = productN
  }else{

  }
 }))
});


// print page
function printPage() {
  window.print();
}

// let data = [
//   {
//     recipient_names: prompt("نام گیرنده را وارد کنید "),
//     postall_codes: prompt("کد پستی مورد نظر را وارد نمایید "),
//     state_prompts: prompt("استان مورد نظر خود را وارد نمایید"),
//     number_prompts: prompt("شماره موبایل گیرنده  مورد نظر را وارد نمایید "),
//     city_prompts: prompt("شهرستان مورد نظر خود را وارد نمایید"),
//     addressBar_prompts: prompt("آدرس مورد نظر خود را وارد نمایید"),
//   },
// ];

// star()
// function star(data) {
//    console.log(data);
// }

///*****>>>>>>>>>>>>>>>>>>>> */
