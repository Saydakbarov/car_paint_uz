import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function AboutTeam({ lang }) {
  return (
    <Box
      sx={{
        background: "black",
        pt: 10,
        pb: 8,
      }}
    >
      <Box className="globalContainer">
        <Grid
          container
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
            },
            alignItems: "center",
            p: 2,
          }}
          gap={3}
        >
          <Grid
            item
            lg={5}
            sx={{
              height: {
                xs: "auto",
                sm: "auto",
                md: "450px",
                lg: "500px",
              },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",

                objectFit: "cover",
                borderRadius: "40px 0px 40px",
                border: "2px solid white",
              }}
              src="https://i.pinimg.com/564x/d9/c7/79/d9c779e4e3633d8511ab08ca1f09d70c.jpg"
              alt=""
            />
          </Grid>
          <Grid item lg={6}>
            <img
              src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Icon-Our-Service1.png"
              alt=""
            />
            <Typography sx={{ fontSize: "24px", color: "white" }}>
              Orbay - ORBAY Chemicals Ltd.
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "gray", mt: 2 }}>
              {lang === "uz"
                ? "avtomobil ta'mirlash bo'yoqlari, yordamchi mahsulotlar, sanoat bo'yoqlari, izolyatsion mastikalar ishlab chiqarish uchun 2002 yilda Bursa shahrida tashkil etilgandan beri o`z faoliyatini olib bormoqda. Ilg'or avtomatlashtirish tizimi tufayli u 280 dona mahsulotni yuqori sifatli va maksimal tezlikda va doimiy ravishda bir xil standartlarga muvofiq ishlab chiqarishga qodir."
                : lang === "ru"
                ? "работает с момента своего основания в Бурсе в 2002 году по производству авторемонтных красок, вспомогательных продуктов, промышленных красок, изоляционных мастик. Благодаря передовой системе автоматизации он способен производить 280 изделий высокого качества, с максимальной скоростью и последовательно по одним и тем же стандартам."
                : "has been operating since its establishment in Bursa in 2002 for the production of car repair paints, auxiliary products, industrial paints, insulating mastics. Thanks to the advanced automation system, it is able to produce 280 pieces of high quality and at maximum speed and consistently according to the same standards."}
            </Typography>

            <Button variant="contained" color="error" sx={{ mt: 3 }}>
              Подробнее
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
            },
            alignItems: "center",
            mt: 8,
            p: 2,
          }}
          gap={3}
        >
          <Grid item lg={6}>
            <img
              src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Icon-Our-Service1.png"
              alt=""
            />
            <Typography sx={{ fontSize: "24px", color: "white" }}>
              Axalta
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "gray", mt: 2 }}>
              {lang === "uz"
                ? "dunyodagi eng yirik avtomobil ishlab chiqaruvchilardan tortib kichik firmalarga o`z maxsulotlarini yetkazib beruvchi eng oldi ishlab chiqaruvchi xisoblanadi. Axalta Coating Systems Yuqori sifatli xisoblanib, qoplamalar Evropada ishlab chiqariladi va turli sohalarda dekorativ ranglarni qoplash, yuqori va past haroratdan himoya qilish, bo'yalgan sirtlarning uzoq umr ko'rish uchun ishlatiladi."
                : lang === "ru"
                ? "Считается ведущим производителем, поставляющим свою продукцию от крупнейших мировых автопроизводителей небольшим компаниям. Axalta Coating Systems Высококачественные покрытия производятся в Европе и используются в различных отраслях промышленности для покрытия декоративных красок, защиты от высоких и низких температур, продления срока службы окрашенных поверхностей."
                : "It is considered the leading manufacturer that supplies its products from the world's largest car manufacturers to small companies. Axalta Coating Systems High quality coatings are manufactured in Europe and are used in various industries to cover decorative colors, protect against high and low temperatures, and prolong the life of painted surfaces."}
            </Typography>

            <Button variant="contained" color="error" sx={{ mt: 3 }}>
              Подробнее
            </Button>
          </Grid>

          <Grid
            item
            lg={5}
            sx={{
              height: {
                xs: "auto",
                sm: "auto",
                md: "450px",
                lg: "500px",
              },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "40px 0px 40px",
                border: "2px solid white",
              }}
              src="https://i.pinimg.com/564x/2c/88/0f/2c880ff0982ac8226945c7ce77e4181f.jpg"
              alt=""
            />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
            },
            alignItems: "center",
            mt: 6,
            p: 2,
          }}
          gap={3}
        >
          <Grid
            item
            lg={5}
            sx={{
              height: {
                xs: "auto",
                sm: "auto",
                md: "450px",
                lg: "500px",
              },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "40px 0px 40px",
                border: "2px solid white",
              }}
              src="https://i.pinimg.com/564x/93/85/f9/9385f9664ccab38cc670a7717ab7e70a.jpg"
              alt=""
            />
          </Grid>
          <Grid item lg={6}>
            <img
              src="https://kit.nirmanavisual.com/autobest/wp-content/uploads/sites/39/2023/09/Icon-Our-Service1.png"
              alt=""
            />
            <Typography sx={{ fontSize: "24px", color: "white" }}>
              CST Kimya Coating Solutions & Technologie
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "gray", mt: 2 }}>
              {lang === "uz"
                ? "Metall uchun professional bo'yoqlar - Turkiyadagi eng yirik yetkazib beruvchi kompaniyalardan va sizga eng yaxshi narxlar va optimal sifatni taklif eta oladigan turk kompaniyasining yetakchisidir."
                : lang === "ru"
                ? "Профессиональные краски по металлу – один из крупнейших поставщиков Турции и лидер турецкой компании, способный предложить вам лучшие цены и оптимальное качество."
                : "Professional paints for metal is one of the largest suppliers in Turkey and the leader of the Turkish company that can offer you the best prices and optimal quality."}
            </Typography>

            <Button variant="contained" color="error" sx={{ mt: 3 }}>
              Подробнее
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
