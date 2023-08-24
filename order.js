const dataOrder={
  "data":[
    {
      nama:"Feris Prayuda",
      image:"https://1.bp.blogspot.com/-BX95y36O-zg/YPlCwpkoVZI/AAAAAAAAFUM/dc4w2bdUXgYU6OJT33CjwOC3h3FyQbiDQCLcBGAsYHQ/s60/a.png",
      kota:"Makassar",
      produk:"Median UI v1.5",
      url:"#",
      harga:"Rp. 130.000",
      waktu:"16:00 WIB - 22 Juli 2021"
    },
    {
      nama:"Melissa Stephanie",
      image:"https://1.bp.blogspot.com/-WPE8-19Rfp8/YPlA-mgF5kI/AAAAAAAAFT8/5Z22RxOWSEsfRc3arUhBhqpeXxsAleSXwCLcBGAsYHQ/s60/b.png",
      kota:"Bandung",
      produk:"Pajero Sport",
      url:"#",
      harga:"Rp. 500.000.000",
      waktu:"15:30 WIB - 22 Juli 2021"
    },
    {
      nama:"Andi Winda Tenri",
      image:"https://1.bp.blogspot.com/-xgv0DxxNQgQ/YPlBzBDEEDI/AAAAAAAAFUE/W1GdajUsfb4m9PyASxpEUifkK_Lv5lbTACLcBGAsYHQ/s60/c.png",
      kota:"Jakarta",
      produk:"Teh Botol Sosro",
      url:"#",
      harga:"Rp. 5.000",
      waktu:"03:00 WIB - 22 Juli 2021"
    }
  ]
};
dataOrder.data.forEach((el)=>{
  var img="//lh3.googleusercontent.com/-QlJpOYV6yF4/XNEPty8zjJI/AAAAAAAAF6k/7RaA8suy7AsVhOYwcP6WLMf2qc54GUXWwCEwYBhgL/h60/ava.png";
  if(el.image !=""){
    img=el.image
  }
  document.querySelector(".orderNotif").innerHTML+=&#039;<div class="item"><div class="image"><span class="img" style="background-image:url(&#039;+img+&#039;)"></div><div class="content"><button class="close"></button><span class="info"><b>&#039;+el.nama+&#039;</b><br />dari <b>&#039;+el.kota+&#039;</b><br />membeli <a href="&#039;+el.url+&#039;" target="_blank">&#039;+el.produk+&#039;</a><br />harga <b>&#039;+el.harga+&#039;</b><small>&#039;+el.waktu+&#039;</small></span></div></div>&#039;
})
document.querySelector(".orderNotif > .item:not(:first-child)").classList.remove("active")
setInterval(()=>{
  document.querySelector(".orderNotif .item:first-child").classList.add("active");
  setTimeout(()=>{
    document.querySelectorAll(".orderNotif .item:first-child").forEach((el)=>{
      el.classList.remove("active");
    })
    document.querySelector(".orderNotif").append(document.querySelector(".orderNotif").childNodes[0])
  },8000);
},15000);
document.querySelectorAll(".item .close").forEach((el)=>{
  el.addEventListener("click",()=>{
    document.querySelector(".item").classList.remove("active")
  })
})
