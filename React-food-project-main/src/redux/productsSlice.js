import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [
    {
        id:1,
        url:require("../component/Dashboard/image/Indfood-1.jpg"),
        rate:'50000',
        title:'Bánh Idly',
        description:'Idli là một loại bánh gạo mặn, có nguồn gốc từ tiểu lục địa Ấn Độ, phổ biến trong bữa sáng ở miền Nam Ấn Độ và Sri Lanka. Bánh được làm bằng cách hấp bột lên men từ đậu trắng và gạo rava, thường chấm kèm với sambar.',

    },
    {
        id:2,
        url:require("../component/Dashboard/image/Indfood-2.jpg"),
        rate:'100000',
        title:'Bánh Dosa',
        description:'Bangalore dosa là loại bánh xèo mỏng và giòn, làm từ bột dosa lên men, phủ sốt tỏi đỏ và nhân khoai tây masala. Hình thức và kết cấu giống với masala dosa nổi tiếng, nhưng điểm khác biệt chính là lớp sốt tỏi đỏ đặc trưng trên bề mặt.',
     
    },
    {
        id:3,
        url:require("../component/Dashboard/image/Indfood-3.jpg"),
        rate:'100000',
        title:'Bánh Puri',
        description:'Masala khoai tây kiểu Nam Ấn được làm từ khoai tây luộc nghiền nhuyễn, nấu trong nước sốt nhẹ nhàng và thơm ngon. Món này được phục vụ kèm với Poori, loại bánh mì chiên ngập dầu làm từ bột mì nguyên cám không men.',
    },
    {
        id:4,
        url:require("../component/Dashboard/image/Indfood-4.jpg"),
        rate:'100000',
        title:'Cháo Upma',
        description:"cháo Upma thơm ngon nhất được phủ rau củ và ghee, chứa nhiều rau hơn để tăng hương vị. Đây là món ăn nhẹ làm từ hạt lúa mì và rau củ, phù hợp với lối sống lành mạnh.",
        
    },
    {
        id:5,
        url:require("../component/Dashboard/image/Indfood-5.jpg"),
        rate:'100000',
        title:'Chappathi',
        description:'Lúa mì nguyên cám truyền thống Tawa đặc biệt,Một số dòng cho chapati Chapati là bánh mì dẹt của Ấn Độ làm từ bột mì. Nó là thực phẩm chính ở các nước Bắc Á, đặc biệt là ở Bắc Ấn Độ và Pakistan. Nó cũng có thể được làm bằng nhiều loại bột khác như jowar, bajra, đậu nành, raji, v.v.',
       
    },
    {
        id:6,
        url:require("../component/Dashboard/image/Indfood-6.jpg"),
        rate:'100000',
        title:'Cơm Biriyani',
        description:'Đậm đà hương vị và có kết cấu kem mịn. Bạn có nghĩ chúng ta đang nói về một món tráng miệng? Thực ra, món biryani này cũng có thể được coi như một món tráng miệng với cách nó tan chảy trong miệng bạn. Gà mềm được ướp trong sữa chua và gia vị để làm cho món biryani này trở nên ngon miệng.',
      
    },
    {
        id:7,
        url:require("../component/Dashboard/image/Indfood-7.jpg"),
        rate:'100000',
        title:'Cá Chiên',
        description:'Cá chiên được chế biến bằng cách tẩm bột và gia vị, tạo thêm độ giòn và vị cay. Cá được tẩm bột và chiên giòn với các loại gia vị đặc trưng của ẩm thực Andhra. Món ăn được phục vụ kèm theo masala truyền thống kiểu Nam Ấn - ăn kèm với chutni đỏ và salad hành.',
    
    
    },
    {
        id:8,
        url:require("../component/Dashboard/image/Indfood-8.jpg"),
        rate:'100000',
        title:'Crab',
        description:'Cua lột chiên giòn kiểu Singapore với ớt cay, được phục vụ kèm cơm gạo thơm Jasmine. Cua được chọn lọc kỹ lưỡng và chế biến cùng các loại gia vị truyền thống.',
       
    },
    {
        id:9,
        url:require("../component/Dashboard/image/Indfood-9.jpg"),
        rate:'100000',
        title:'Tôm Càng',
        description:'Tôm sú xào theo phong cách Hồ Nam với nước sốt xì dầu-ớt cay, kết hợp cùng ớt tươi, sả, lá chanh kaffir, hành tím, hành tây và cần tây',
        
    },
    {
        id:10,
        url:require("../component/Dashboard/image/Indfood-10.jpg"),
        rate:'100000',
        title:'Pav baaji',
        description:'Pav Bhaji là một món ăn nhanh nổi tiếng từ Mumbai (Bombay), Ấn Độ, bao gồm cà ri rau củ (bhaji) được nấu trong nước sốt cà chua và phục vụ kèm với bánh mì mềm (pav).',
       
    },
    {
        id:11,
        url:require("../component/Dashboard/image/Indfood-11.png"),
        rate:'100000',
        title:'Parotta',
        description:'Parotta hay Porotta là một loại bánh mì dẹt có lớp, phổ biến ở Ấn Độ và Sri Lanka, được làm từ bột mì Maida hoặc Atta. Nó còn được gọi là bánh kếp dạng ruy băng giòn.',
        
    },
    {
        id:12,
        url:require("../component/Dashboard/image/indfood-12.png"),
        rate:'100000',
        title:'Bữa Chay',
        description:'Chế độ ăn chay không bao gồm thịt, gia cầm hoặc hải sản. Đây là một kế hoạch ăn uống được xây dựng chủ yếu từ các loại thực phẩm có nguồn gốc từ thực vật.',
       
    },
        {
            id:2.1,
            url:require("../component/Dashboard/image/Italifood-1.jpg"),
            rate:'300000',
            title:'Mì Ý Spaghetti',
            description:'Spaghetti là một loại mì ống dài, mỏng, dạng sợi tròn và rắn. Giống như các loại mì ống khác, spaghetti được làm từ lúa mì xay và nước, đôi khi được bổ sung thêm vitamin và khoáng chất. Spaghetti khô của Ý được làm từ bột semolina của lúa mì cứng (durum wheat), tuy nhiên, ngoài Ý, nó có thể được sản xuất theo nhiều cách khác nhau.'
        },
        {
            id:2.2,
            url:require("../component/Dashboard/image/italifood-2.jpg"),
            rate:'250000',
            title:'Lasagna',
            description:'Lasagna là loại mì ống dạng tấm phẳng, truyền thống của Ý, được làm với phô mai Parmigiano-Reggiano, sốt Béchamel (sốt trắng) và ragù (sốt thịt).'},
        {id:2.3,
            url:require("../component/Dashboard/image/italifood-3.jpg"),
            rate:'500000',
            title:' Risotto milanese',
            description:'Risotto cổ điển là món ăn đậm đà, kem mịn với độ sệt giống cháo, nhưng mỗi hạt cơm vẫn giữ được độ dai vừa phải. Trong risotto Ý, gạo được rang khô như phương pháp pilaf, nhưng nước được thêm từ từ và khuấy đều liên tục để hạt gạo thấm đều.'},
        {id:2.4,
            url:require("../component/Dashboard/image/italifood-4.jpg"),
                rate:'700000',
                title:'Ratatouille',
                description:'Ratatouille truyền thống của Pháp là món ăn phụ đơn giản gồm các loại rau hầm: cà tím, bí xanh, hành tây, bí vàng, ớt chuông, tỏi, cà chua tươi và thảo mộc.'},
        {id:2.5,
            url:require("../component/Dashboard/image/italifood-5.jpg"),
                rate:'200000',
                title:'Tiramisu',
                description:'Tiramisù là món tráng miệng mịn màng với bánh savoiardi nhúng cà phê espresso, xen kẽ lớp trứng đánh ngọt nhẹ và phô mai mascarpone, phủ trên cùng là lớp bột cacao thơm lừng.'},
        {id:2.6,
            url:require("../component/Dashboard/image/italifood-6.jpg"),
                rate:'439000',
                title:'Frittata',
            description:'Frittata là món ăn Ý làm từ trứng, giống như omelette, quiche không vỏ, hoặc trứng bác, được thêm các nguyên liệu như thịt, phô mai, hoặc rau củ. Từ "frittata" trong tiếng Ý có nghĩa là "chiên".'},
           
        {id:2.7,
                url:require("../component/Dashboard/image/Italifood-7.png"),
                rate:'639000',
                title:'Bánh Mì Foccacia',
            description:'Focaccia được làm từ bột mì, dầu, nước, men và muối, giống bột pizza. Tuy nhiên, nó chứa nhiều men hơn, giúp bánh nở cao hơn và có kết cấu mềm xốp như bánh mì. Focaccia được yêu thích nhờ hương vị thơm ngon và kết cấu mịn màng.'},
           
        {id:2.8,
                url:require("../component/Dashboard/image/italifood-8.jpg"),
                rate:'239000',
                title:'Pizza',
            description:"Với pizza Ý đích thực, bạn sẽ thấy nước sốt tự làm từ cà chua tươi lột vỏ cùng sự kết hợp hài hòa của các loại thảo mộc. Đặc biệt, pizza Ý không trộn chung topping và sốt khi nấu, mà chỉ đơn giản là phết sốt lên lớp đế bánh."},


            {
                id:3.1,
                url:require("../component/Dashboard/image/kor-1.jpg"),
                rate:'250000',
                title:'Tteokbokki',
                description:"Tteokbokki là món ăn vặt đường phố Hàn Quốc, làm từ bánh gạo dẻo và tương ớt gochujang cay nồng. Theo The World's Best Spicy Food của Lonely Planet, món này được xào cùng chả cá eomuk, bắp cải, hành lá và tỏi.",
                
            },
            {
                id:3.2,
                url:require("../component/Dashboard/image/kor-2.jpg"),
                rate:'400000',
                title:'Sundubu jjigae',
                description:"Sundubu jjigae là món canh hầm Hàn Quốc với nguyên liệu chính là đậu phụ non. Có nhiều cách nấu khác nhau, như dùng kimchi, thịt heo băm, hoặc hải sản. Phiên bản yêu thích nhất là Haemul Sundubu Jjigae (해물 순두부 찌개) với hải sản, mang hương vị thanh mát và trong trẻo.",
                
            },
            {
                id:3.3,
                url:require("../component/Dashboard/image/kor-3.jpg"),
                rate:'450000',
                title:'Há Cảo Jjin-mandu',
                description:"Jjin-mandu (찐만두) là mandu hấp, dùng xửng tre truyền thống hoặc hiện đại. Gullin-mandu (굴린만두), hay gulmandu, là mandu hình cầu không có lớp vỏ, thường ăn vào mùa hè. Wang mandu (왕만두) là bánh bao nhân thịt heo và rau, tương tự baozi của Trung Quốc.",
               
            },
            {
                id:3.4,
                url:require("../component/Dashboard/image/kor-4.jpg"),
                rate:'400000',
                title:'Cơm Chiên Kimchi',
                description:"Cơm chiên kimchi (kimchi-bokkeum-bap, 김치볶음밥) là món cơm chiên Hàn Quốc, làm từ kimchi, cơm và các nguyên liệu khác như rau củ hoặc thịt hộp spam.",
                
            },
            {
                id:3.5,
                url:require("../component/Dashboard/image/kor-5.jpg"),
                rate:'450000',
                title:'Cơm Cuộn Kimbap',
                description:"Kimbap là một món ăn Hàn Quốc được làm từ cơm nấu chín và các nguyên liệu như rau củ, cá, và thịt, được cuộn trong gim (김) — lá rong biển khô — và cắt thành từng miếng vừa ăn. Nguồn gốc của kimbap vẫn còn nhiều tranh cãi.",
              
            },
            {
                id:3.6,
                url:require("../component/Dashboard/image/kor-6.png"),
                rate:'150000',
                title:'Cháo Hobakjuk',
                description:"Hobak-juk (호박죽) hay cháo bí đỏ là một loại cháo truyền thống của Hàn Quốc, được làm từ bí đỏ và bột gạo nếp. Đây là món cháo mịn màng, có vị ngọt tự nhiên, thường được phục vụ cho người bệnh đang hồi phục hoặc người cao tuổi.",
                
            },
            {
                id:3.7,
                url:require("../component/Dashboard/image/kor-7.jpg"),
                rate:'380000',
                title:'Gà Chiên Hàn Quốc',
                description:"Gà rán Hàn Quốc giòn rụm, thơm ngon và được phủ nhiều loại sốt theo sở thích của bạn. Một số hương vị có vị cay, trong khi một số khác được phủ lớp sốt đậm đà vị umami từ mè và xì dầu, và có loại lại mang vị ngọt hấp dẫn.",
                
            },
  
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
