/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "004a46017d377e7734e0eca46de51182/chart.png",
    "revision": "004a46017d377e7734e0eca46de51182"
  },
  {
    "url": "00ada3a0b7909c3685e5f3ee618354a7/SixCharts.png",
    "revision": "00ada3a0b7909c3685e5f3ee618354a7"
  },
  {
    "url": "01280ce09d34e642e3613698063693cc/dash_example.py",
    "revision": "01280ce09d34e642e3613698063693cc"
  },
  {
    "url": "01579fc6bcf79816d64a0582fa031024/geompoint.png",
    "revision": "01579fc6bcf79816d64a0582fa031024"
  },
  {
    "url": "02aa206361a969b42d3e3be18d3bdb27/pieChart1.png",
    "revision": "02aa206361a969b42d3e3be18d3bdb27"
  },
  {
    "url": "03add7995000b7d9481edf50fcf4db44/Fig5.png",
    "revision": "03add7995000b7d9481edf50fcf4db44"
  },
  {
    "url": "0412015cc95239518bd5b737cb1a95e8/solution_2.png",
    "revision": "0412015cc95239518bd5b737cb1a95e8"
  },
  {
    "url": "063685adcac7fa42b8d4541c215a191d/distPlot.png",
    "revision": "063685adcac7fa42b8d4541c215a191d"
  },
  {
    "url": "09555539ce1d05bc69f04cab08f3a4de/rstudio1.png",
    "revision": "09555539ce1d05bc69f04cab08f3a4de"
  },
  {
    "url": "0cd46bd50718bbf6d7affeef5e4ead0e/Fig6.png",
    "revision": "0cd46bd50718bbf6d7affeef5e4ead0e"
  },
  {
    "url": "0e5fc84217eed1acad88e7b3ede67db4/output_12_0.png",
    "revision": "0e5fc84217eed1acad88e7b3ede67db4"
  },
  {
    "url": "11630fecaaf89cc47d3f52781145af09/helen_k.jpg",
    "revision": "11630fecaaf89cc47d3f52781145af09"
  },
  {
    "url": "1215f4af5f5515e9b936876cd4b8a4ef/Fig1.png",
    "revision": "1215f4af5f5515e9b936876cd4b8a4ef"
  },
  {
    "url": "1603883dc8ae140f22adf5bc4b78c3a7/Fig6.png",
    "revision": "1603883dc8ae140f22adf5bc4b78c3a7"
  },
  {
    "url": "1a73ca4ce2a3b95a68d9595f4234a6fe/Fig3.png",
    "revision": "1a73ca4ce2a3b95a68d9595f4234a6fe"
  },
  {
    "url": "1b8e2c8856a46f00b17ea24b776b551a/pop_2020.png",
    "revision": "1b8e2c8856a46f00b17ea24b776b551a"
  },
  {
    "url": "1b950aec9371d81fecb003f21d10c274/Seb_J.jpg",
    "revision": "1b950aec9371d81fecb003f21d10c274"
  },
  {
    "url": "1bfc9850-23cd5f3773e76fa97c13.js"
  },
  {
    "url": "1bfc9850-23cd5f3773e76fa97c13.js.map",
    "revision": "98e9c9dde8d00923f9728a71f20604ca"
  },
  {
    "url": "21ef03c1345f4938ec8cbc8213dea1da/img2.png",
    "revision": "21ef03c1345f4938ec8cbc8213dea1da"
  },
  {
    "url": "249b847b0b04f50303b758b0cfc4322a/img10.png",
    "revision": "249b847b0b04f50303b758b0cfc4322a"
  },
  {
    "url": "252f366e-d92828dac3ebd402255a.js"
  },
  {
    "url": "252f366e-d92828dac3ebd402255a.js.map",
    "revision": "d6062150600a5a785f7738cdca4c6491"
  },
  {
    "url": "25fffed93c38f0fc849f23da47ea66ae/Deviation2.png",
    "revision": "25fffed93c38f0fc849f23da47ea66ae"
  },
  {
    "url": "276e0489d64046d0d473e8b3979836ee/img9.gif",
    "revision": "276e0489d64046d0d473e8b3979836ee"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-3b5a8fd1aad198d89120.js"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-3b5a8fd1aad198d89120.js.map",
    "revision": "61ae5161462752a7034ad122577d4d00"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-4939852c6f701331807a.js"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-4939852c6f701331807a.js.map",
    "revision": "29f269240921daaf5b928225830a95e9"
  },
  {
    "url": "2b34a3ff3736da40afaf4b7a5922ddb9/login_long.jpg",
    "revision": "2b34a3ff3736da40afaf4b7a5922ddb9"
  },
  {
    "url": "2bf6dba5826fee778687508fa6fa4cd9/img2.png",
    "revision": "2bf6dba5826fee778687508fa6fa4cd9"
  },
  {
    "url": "2f65514bfd69f65c21ff39924ffc41f5/img5.png",
    "revision": "2f65514bfd69f65c21ff39924ffc41f5"
  },
  {
    "url": "33cf97e05704742911a9dac9d61fd0ab/sp_lm.png",
    "revision": "33cf97e05704742911a9dac9d61fd0ab"
  },
  {
    "url": "355459c0a3aefbf39ca1dd9825f3cfcd/output_18_0.png",
    "revision": "355459c0a3aefbf39ca1dd9825f3cfcd"
  },
  {
    "url": "36-f8f03d9bf44ed4467241.js"
  },
  {
    "url": "36-f8f03d9bf44ed4467241.js.map",
    "revision": "a1371748e0140fda36e8a98341912fcd"
  },
  {
    "url": "3a0a47071faee2b02596b6414cb67d1c/scatterPlot.png",
    "revision": "3a0a47071faee2b02596b6414cb67d1c"
  },
  {
    "url": "3cda13cd4a0d1370ed8e128035832649/Fig1.png",
    "revision": "3cda13cd4a0d1370ed8e128035832649"
  },
  {
    "url": "3d8d262d17d26040d10a48a428c74098/img6.png",
    "revision": "3d8d262d17d26040d10a48a428c74098"
  },
  {
    "url": "3d980ef5e583bbb3a8c271f16a7b8847/barPlot.png",
    "revision": "3d980ef5e583bbb3a8c271f16a7b8847"
  },
  {
    "url": "3e5c819d98181d0f0d3a619b42137200/TypesofData.png",
    "revision": "3e5c819d98181d0f0d3a619b42137200"
  },
  {
    "url": "404.html",
    "revision": "7a8fc43f92b0ac5e02fc410a44ba96b3"
  },
  {
    "url": "404/index.html",
    "revision": "1f4068d817be9002811c07bb51829fb8"
  },
  {
    "url": "4117d2db42604660cb5b36f843e70ea8/img1.png",
    "revision": "4117d2db42604660cb5b36f843e70ea8"
  },
  {
    "url": "42aaaee73ba23c1b9ac8d40c1d5f4374/img9.png",
    "revision": "42aaaee73ba23c1b9ac8d40c1d5f4374"
  },
  {
    "url": "45401ff2e6ab69d21b0b06f968e7aad8/rstudio4.png",
    "revision": "45401ff2e6ab69d21b0b06f968e7aad8"
  },
  {
    "url": "45b10ed8990621b80e20eb4dac89e4b3/thumb1.png",
    "revision": "45b10ed8990621b80e20eb4dac89e4b3"
  },
  {
    "url": "45e9eea1cb6ade247b97083786de51ac/img1.jpg",
    "revision": "45e9eea1cb6ade247b97083786de51ac"
  },
  {
    "url": "48c5cb70039984134e6f5b953d14daf5/Fig2.png",
    "revision": "48c5cb70039984134e6f5b953d14daf5"
  },
  {
    "url": "4bbb4c91d242c019e5da5737f2ef08b6/img8.png",
    "revision": "4bbb4c91d242c019e5da5737f2ef08b6"
  },
  {
    "url": "4da94c4de0594df65b731a4b475d47a6/img12.png",
    "revision": "4da94c4de0594df65b731a4b475d47a6"
  },
  {
    "url": "4f4af801e0dfa42b4672d18534eefdb5/Script.r",
    "revision": "4f4af801e0dfa42b4672d18534eefdb5"
  },
  {
    "url": "503d8eb81732a0fe3895c085d0c467c1/pieChart2.png",
    "revision": "503d8eb81732a0fe3895c085d0c467c1"
  },
  {
    "url": "510358d2a23ab4d63c159f88163bf659/shiny1.png",
    "revision": "510358d2a23ab4d63c159f88163bf659"
  },
  {
    "url": "52af90610c20172c99ecad6da466a1fa/esquisse.png",
    "revision": "52af90610c20172c99ecad6da466a1fa"
  },
  {
    "url": "52d4677e3ba0379f6160744cf6d82782/Fig7.jpg",
    "revision": "52d4677e3ba0379f6160744cf6d82782"
  },
  {
    "url": "5689f79c3025dc9033dd560f73a3a5d7/img1.png",
    "revision": "5689f79c3025dc9033dd560f73a3a5d7"
  },
  {
    "url": "57c336a98a9423d616752f3480dbb538/FrenchWine2.png",
    "revision": "57c336a98a9423d616752f3480dbb538"
  },
  {
    "url": "57c35a5e477247a7420e0dbe29395223/output_30_0.png",
    "revision": "57c35a5e477247a7420e0dbe29395223"
  },
  {
    "url": "58045623acf68358ed63be86cba585d7/Fig1.png",
    "revision": "58045623acf68358ed63be86cba585d7"
  },
  {
    "url": "5883c03e32c83fa3188bccea05494e24/stats.png",
    "revision": "5883c03e32c83fa3188bccea05494e24"
  },
  {
    "url": "58e9e33dad5576b13b6314440053cc6b/Fig3.png",
    "revision": "58e9e33dad5576b13b6314440053cc6b"
  },
  {
    "url": "59ef11ce06c4d4c45a11483da891845d/output_28_1.png",
    "revision": "59ef11ce06c4d4c45a11483da891845d"
  },
  {
    "url": "5ba6f7e717ca64cbf5698d6b49958983/Theme1.png",
    "revision": "5ba6f7e717ca64cbf5698d6b49958983"
  },
  {
    "url": "5e1f724a34e4fbbf340dba4410840a49/output_26_1.png",
    "revision": "5e1f724a34e4fbbf340dba4410840a49"
  },
  {
    "url": "5e2a4920-28e0dfa664c65a2dc86c.js"
  },
  {
    "url": "5e2a4920-28e0dfa664c65a2dc86c.js.map",
    "revision": "8e801716391211329552a52aaa5ee37c"
  },
  {
    "url": "603e72ea82932164d1edff27806072a2/Relationship1.png",
    "revision": "603e72ea82932164d1edff27806072a2"
  },
  {
    "url": "646aa94d9498a2d5ab1c0f2633cc95a8/img_3.svg",
    "revision": "646aa94d9498a2d5ab1c0f2633cc95a8"
  },
  {
    "url": "65ff790df8b54fe3fd536b5477c1dccd/boxPlot.png",
    "revision": "65ff790df8b54fe3fd536b5477c1dccd"
  },
  {
    "url": "6728d85a-80efe8c932799e59b23d.js"
  },
  {
    "url": "6728d85a-80efe8c932799e59b23d.js.map",
    "revision": "9b85318eadeb122d3ab9336318a7a692"
  },
  {
    "url": "6b92068021148e585085ecf6ef9f5d77/img8.png",
    "revision": "6b92068021148e585085ecf6ef9f5d77"
  },
  {
    "url": "6cca3b30969784cf299c198a765827a5/sp_subset.png",
    "revision": "6cca3b30969784cf299c198a765827a5"
  },
  {
    "url": "6de14820c819b82ca826e9f42b769237/columnChart.png",
    "revision": "6de14820c819b82ca826e9f42b769237"
  },
  {
    "url": "6dfb4a1ec3e5661f8105cf2cfe33aa41/scatterPlot.png",
    "revision": "6dfb4a1ec3e5661f8105cf2cfe33aa41"
  },
  {
    "url": "6f3ed93fe3e6ea21b26c15df4b34c525/Fig1.png",
    "revision": "6f3ed93fe3e6ea21b26c15df4b34c525"
  },
  {
    "url": "757cea458fb7bd13c92287aadae2f076/lineChart.png",
    "revision": "757cea458fb7bd13c92287aadae2f076"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js.map",
    "revision": "1008e434f013a48014718f5522d15f8a"
  },
  {
    "url": "7927f9558ed6828a07491f06aa7e9919/groupby.png",
    "revision": "7927f9558ed6828a07491f06aa7e9919"
  },
  {
    "url": "7a10acfa924e70cf856c7190addf70b6/output_20_1.png",
    "revision": "7a10acfa924e70cf856c7190addf70b6"
  },
  {
    "url": "7b63819be61e87cba1590a679ad84c1a/Heatmap1.png",
    "revision": "7b63819be61e87cba1590a679ad84c1a"
  },
  {
    "url": "7d49b884781ef1a79e72350e2cc35570/data1.png",
    "revision": "7d49b884781ef1a79e72350e2cc35570"
  },
  {
    "url": "7f9e9b7fc7a37ade6ddd71600d8a792a/Heatmap2.png",
    "revision": "7f9e9b7fc7a37ade6ddd71600d8a792a"
  },
  {
    "url": "869b12657a2969845f875e26f3c08591/login_sm2.jpg",
    "revision": "869b12657a2969845f875e26f3c08591"
  },
  {
    "url": "86e75605d03ca8e7159748303a29d048/index.mdx",
    "revision": "86e75605d03ca8e7159748303a29d048"
  },
  {
    "url": "877f6d0fb7b8bec8f1028e050ed35dc6/Fig4.png",
    "revision": "877f6d0fb7b8bec8f1028e050ed35dc6"
  },
  {
    "url": "8ae492f912e3fc4c59b0e2bb6816e688/Fig3.png",
    "revision": "8ae492f912e3fc4c59b0e2bb6816e688"
  },
  {
    "url": "8df2d8c7fa72b24df31c141700f56dbe/Compare.png",
    "revision": "8df2d8c7fa72b24df31c141700f56dbe"
  },
  {
    "url": "8e2cff7e8c5486703c4a615fead939e8/Histogram1.png",
    "revision": "8e2cff7e8c5486703c4a615fead939e8"
  },
  {
    "url": "8e700d79fa76b0cb5e6e610b99b79488/edward_itineraryCUMULATIVE.gif",
    "revision": "8e700d79fa76b0cb5e6e610b99b79488"
  },
  {
    "url": "8e98fa8ec906378e09ae926f5f398d4e/pipes.png",
    "revision": "8e98fa8ec906378e09ae926f5f398d4e"
  },
  {
    "url": "8f09fab6cb79bc5f33f737ffdac49453/img_2.png",
    "revision": "8f09fab6cb79bc5f33f737ffdac49453"
  },
  {
    "url": "8f5182aa0891f286cffa20a6e1851192/map_visualisation_presentation.jpg",
    "revision": "8f5182aa0891f286cffa20a6e1851192"
  },
  {
    "url": "8f52df9ea57cb90343719493401d6886/waterfall.png",
    "revision": "8f52df9ea57cb90343719493401d6886"
  },
  {
    "url": "93f2baa05deeebef7e263a2ff9ac1306/lattice1.png",
    "revision": "93f2baa05deeebef7e263a2ff9ac1306"
  },
  {
    "url": "95091254e14f48542c6dd64954c1b0a0/ggpubr.png",
    "revision": "95091254e14f48542c6dd64954c1b0a0"
  },
  {
    "url": "95b64a6e-b344a49f88fc5cc30cc4.js"
  },
  {
    "url": "95b64a6e-b344a49f88fc5cc30cc4.js.map",
    "revision": "4f73ec1191f7143c0efc830d6ad4f66f"
  },
  {
    "url": "979495879b0b2a87ffced73604a45f648734915f-aa9905c6994831649257.js"
  },
  {
    "url": "979495879b0b2a87ffced73604a45f648734915f-aa9905c6994831649257.js.map",
    "revision": "f44e3c984a00c6ec2857743fa4a00768"
  },
  {
    "url": "98a599ca4a0880f25a77b618bc1ed9da/participants.jpg",
    "revision": "98a599ca4a0880f25a77b618bc1ed9da"
  },
  {
    "url": "99697d4401da93ee66ffc2a8aaa815b1/output_10_1.png",
    "revision": "99697d4401da93ee66ffc2a8aaa815b1"
  },
  {
    "url": "998b79439819a4d1afc62c66b120d076/img4.png",
    "revision": "998b79439819a4d1afc62c66b120d076"
  },
  {
    "url": "999bd8b8776d289d6ab0a525ed66722e/filtermpg.png",
    "revision": "999bd8b8776d289d6ab0a525ed66722e"
  },
  {
    "url": "9bbf8a8a7682203dc5ecb06a813fd631/lattice2.png",
    "revision": "9bbf8a8a7682203dc5ecb06a813fd631"
  },
  {
    "url": "9bed7912d99f2b67ca7f100b1e8864fc/Fig3.png",
    "revision": "9bed7912d99f2b67ca7f100b1e8864fc"
  },
  {
    "url": "9c9987e4871318a22b3060b9f012101e/img11.png",
    "revision": "9c9987e4871318a22b3060b9f012101e"
  },
  {
    "url": "a0f1a88da99c38bdb88ff0985519a90a/Fig2.png",
    "revision": "a0f1a88da99c38bdb88ff0985519a90a"
  },
  {
    "url": "a2f50b4c8376723eff793a09b27a6b1b/lattice3.png",
    "revision": "a2f50b4c8376723eff793a09b27a6b1b"
  },
  {
    "url": "a2f93de9a8e200af0de860d457e88ba6/Panel.png",
    "revision": "a2f93de9a8e200af0de860d457e88ba6"
  },
  {
    "url": "a44240697a5f55109c51dfebab7b3395/Fig2.png",
    "revision": "a44240697a5f55109c51dfebab7b3395"
  },
  {
    "url": "a644408106b079620ca4a349f4cc66e5/Kickstarter2.png",
    "revision": "a644408106b079620ca4a349f4cc66e5"
  },
  {
    "url": "a77f1c01b608ab4c9892bef2da4eb962/img14.png",
    "revision": "a77f1c01b608ab4c9892bef2da4eb962"
  },
  {
    "url": "a84ec2294a8faf9b5e0965967d602659/summary.png",
    "revision": "a84ec2294a8faf9b5e0965967d602659"
  },
  {
    "url": "a8e5249bdeab577fdedce16e359f5195/Fig4.png",
    "revision": "a8e5249bdeab577fdedce16e359f5195"
  },
  {
    "url": "a90d453ec8e29ba2f6bd65dbbd1305aa/mutateMpg.png",
    "revision": "a90d453ec8e29ba2f6bd65dbbd1305aa"
  },
  {
    "url": "about/index.html",
    "revision": "4cb6f1b68564547f12953b18e06b2b36"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "accessibility/index.html",
    "revision": "0d821de45435ce75748c772227b80778"
  },
  {
    "url": "adb95786ee5c22fc51746113cb541f06/Fig4.png",
    "revision": "adb95786ee5c22fc51746113cb541f06"
  },
  {
    "url": "app-6249dded844ec09ac6d9.js"
  },
  {
    "url": "app-6249dded844ec09ac6d9.js.map",
    "revision": "87212e69728e9ebf3041dd22dc06f46c"
  },
  {
    "url": "app-ebd3d27154860afe1a74.js"
  },
  {
    "url": "app-ebd3d27154860afe1a74.js.map",
    "revision": "7a28c7ec766a2a8578205b8a0c50e2dc"
  },
  {
    "url": "b06b83e0afecc264170eb629af8026bd/WrongColors2.png",
    "revision": "b06b83e0afecc264170eb629af8026bd"
  },
  {
    "url": "b35659b84c41c4f894d576a4dc178f20/Distribution1.png",
    "revision": "b35659b84c41c4f894d576a4dc178f20"
  },
  {
    "url": "b38b55a587a6ad5f4a06b666c9e255c7/requirements.txt",
    "revision": "b38b55a587a6ad5f4a06b666c9e255c7"
  },
  {
    "url": "b4cbf28e22e521e30c82125257f309ca/temp.jpg",
    "revision": "b4cbf28e22e521e30c82125257f309ca"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-672df63096efe4cd0a30.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-672df63096efe4cd0a30.js.map",
    "revision": "6f7419ed1c8ac8b3dc6ea4f1a296a40c"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-755819b4bfb15ba68f59.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-755819b4bfb15ba68f59.js.map",
    "revision": "38ae77e4d08ba3b44102b57e80bec99c"
  },
  {
    "url": "b6f2fe82a2458ef1e089e6f3cdacff6a/Fig4.png",
    "revision": "b6f2fe82a2458ef1e089e6f3cdacff6a"
  },
  {
    "url": "b7d165f1f79ad6a4c4a0b6d9cac7a5b6/Histogram2.png",
    "revision": "b7d165f1f79ad6a4c4a0b6d9cac7a5b6"
  },
  {
    "url": "b7ff330670970d127561ca52bc9d8efe/rstudio2.png",
    "revision": "b7ff330670970d127561ca52bc9d8efe"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-9daf641f06338cd6b516.js"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-9daf641f06338cd6b516.js.map",
    "revision": "84bfa8b57d92e7ebe8146d5ea10b48e5"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-aaba070ceb81caf07920.js"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-aaba070ceb81caf07920.js.map",
    "revision": "ab8614772e52bcb1ed969b513a3fdbaa"
  },
  {
    "url": "b98bc7c3-0073e86f6c60b4c7b6fb.js"
  },
  {
    "url": "b98bc7c3-0073e86f6c60b4c7b6fb.js.map",
    "revision": "422c1f2ec266a3b168e8c8739a256b69"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-52cc537562c541074ccc.js"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-52cc537562c541074ccc.js.map",
    "revision": "9751898fdaa8bfa920c617600d41221e"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-8855b342e91f200b2528.js"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-8855b342e91f200b2528.js.map",
    "revision": "6bf6cd714396f8a3d3444b3b3eafe235"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js.map",
    "revision": "b0b7d081034c2bd77337841dcb2f5505"
  },
  {
    "url": "bf46a6306417222dee5db2f226df3951/img7.png",
    "revision": "bf46a6306417222dee5db2f226df3951"
  },
  {
    "url": "blog/01/06/2020/visualising-high-risk-areas-for-covid-19-mortality/index.html",
    "revision": "6d1651e474524419a5a4a1e1d90528be"
  },
  {
    "url": "blog/02/05/2020/dataviz-stats-1/index.html",
    "revision": "01ee205bbce0748eda45474b1f4228f6"
  },
  {
    "url": "blog/03/07/2020/Deploy-Your-Dash-App/index.html",
    "revision": "7516ab9089bbe17823a919742dec1e1a"
  },
  {
    "url": "blog/03/07/2020/LearningPath-Introduction/index.html",
    "revision": "5d5de9d6fdb536aa8c5b5b6801476663"
  },
  {
    "url": "blog/04/06/2020/dash-tutorial/index.html",
    "revision": "5003f740b1cc80c00d9d67b57e2a1b1f"
  },
  {
    "url": "blog/04/07/2020/LearningPath-Lab/index.html",
    "revision": "2841ccce88be01c6e3ef8f03abac72b3"
  },
  {
    "url": "blog/05/02/2021/Shiny-Template/index.html",
    "revision": "c8f8817ddf1e2bfe25fe78d94bdb7856"
  },
  {
    "url": "blog/05/07/2020/LearningPath-Workflow/index.html",
    "revision": "c6b545659f18125e1ab3935df894c3bf"
  },
  {
    "url": "blog/05/09/2020/challenges-in-visualising-data/index.html",
    "revision": "db661c277d45ca7be7306358b9f6d06e"
  },
  {
    "url": "blog/06/04/2020/chart-choice/index.html",
    "revision": "3eefdb8d3843340fc2e72cd67e6b31bd"
  },
  {
    "url": "blog/06/05/2020/Colour-Schemes/index.html",
    "revision": "ccbb3f5defc52f9760bac6d2fe092969"
  },
  {
    "url": "blog/07/05/2020/dataviz-stats-2/index.html",
    "revision": "848edb38af53733362c3510d74ad8658"
  },
  {
    "url": "blog/08/10/2020/moving-from-excel-to-r/index.html",
    "revision": "d9281a9aa492073d8a16c5385aca94d6"
  },
  {
    "url": "blog/09/09/2020/data-visualizations-social-role/index.html",
    "revision": "a9b810d27ccd197f11679d055755ae20"
  },
  {
    "url": "blog/11/06/2020/simple-data-visualisations-have-become-key-to-communicating-about-the-COVID-19-pandemic/index.html",
    "revision": "bf21e94bce7ba87811d26179327ba817"
  },
  {
    "url": "blog/12/06/2020/dash-tutorial-2/index.html",
    "revision": "109c9cbcaf08b2e70840de637cf86794"
  },
  {
    "url": "blog/15/01/2021/Data-Processing-In-R/index.html",
    "revision": "034290ff67defae00b2ac13f3a2a5cd7"
  },
  {
    "url": "blog/16/06/2020/Jupyter-Widgets/index.html",
    "revision": "f89cefa41ceb5b5c61419476d25baaf9"
  },
  {
    "url": "blog/16/07/2020/python-visualisation-templates/index.html",
    "revision": "1f38de8373bbc21f104f4c887d3a1ab4"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "68a354ce6b1e33472982a99058ff1a60"
  },
  {
    "url": "blog/20/01/2021/Static-Visualisations-In-R/index.html",
    "revision": "240b1828e1f7a56a7c10d27f2a586df9"
  },
  {
    "url": "blog/20/05/2020/Non-Numeric/index.html",
    "revision": "444338124aa0ee42110c4bfe31dca3c3"
  },
  {
    "url": "blog/22/03/2020/contribute-blog-post/index.html",
    "revision": "7cdcc888ab73efa78508aa0fad27efb2"
  },
  {
    "url": "blog/22/03/2020/datavizhub-guide/index.html",
    "revision": "1bc73e5dde86cbe0668efa0d60502750"
  },
  {
    "url": "blog/24/06/2020/host-jupyter-notebook/index.html",
    "revision": "6c4fab6801880cec4e190bd1a0eb85c1"
  },
  {
    "url": "blog/25/01/2021/Morphologica/index.html",
    "revision": "ea3f6a7a3b02073343cd174ba1b4d02b"
  },
  {
    "url": "blog/26/08/2020/D3js-for-data-visualisation/index.html",
    "revision": "7dbd85e5c7a63d0ab4a76312f90708ec"
  },
  {
    "url": "blog/27/01/2021/Interactive-Visualisations-In-R/index.html",
    "revision": "7e9f28902957a524ac98af44818417b7"
  },
  {
    "url": "blog/28/02/2020/Urban-Observatories-hackathon/index.html",
    "revision": "7ee373bba347730bb2582fccbf7302ac"
  },
  {
    "url": "blog/30/09/2020/making-the-best-data-visualisations-in-excel/index.html",
    "revision": "2d5784c0b93b81814f53a8019df0ffc8"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "492dbc2c77746ce8e0653ff8e09c3155"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "d6f97f369f728e761bbade6d935db100"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "3159e8d7eab6ce21b915dd5e6cf9d433"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "0abeb9acf4f8baaa3159d9848fc9ac9d"
  },
  {
    "url": "blog/index.html",
    "revision": "f73d46997957c2e70b5bd76ca7f3a5e0"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "39ac0175ebe8a96eb210b89c341051e4"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "b6ba5249451bbfd006f74648f21538c2"
  },
  {
    "url": "blog/tag/best-practice/index.html",
    "revision": "0e7cedb3bb5737d9522f380103c63b35"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "478b775bc1961a012fb1e76df7bf26b2"
  },
  {
    "url": "blog/tag/c/index.html",
    "revision": "b97a85ed61eea5e593fbd9847f5a877a"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "0bb6775a85311caa73e12e9fde1891d9"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "b336e0e2aefaff2f9e54066800a05f74"
  },
  {
    "url": "blog/tag/d-3-js/index.html",
    "revision": "c4c2de0704639b0be8b2ea541fff4e0b"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "202abf22425ee6e27ebaca67d36368f0"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "a691868202e14223f1df47cd8aae1d5d"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "096ca4068a77ee8e6e5d7b353984f87d"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "23b9fe6435be457ca76162dccac9ec47"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "40ba2725942838ca97affe5c16268184"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "e48214ff6f187584b1626f4a57deeb39"
  },
  {
    "url": "blog/tag/effectiveness/index.html",
    "revision": "5ede2f6da70b3a093af8825fc6084800"
  },
  {
    "url": "blog/tag/effects/index.html",
    "revision": "1a0fdae88460f2fa541eebb021ec6828"
  },
  {
    "url": "blog/tag/emotions/index.html",
    "revision": "e770fc62dd65f6d499443075c434e08d"
  },
  {
    "url": "blog/tag/engaging-with-dataviz/index.html",
    "revision": "473f6a44061a07bc31eccda09fdff01a"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "71022ea1164886decf1ab87a8a9d3691"
  },
  {
    "url": "blog/tag/excel/index.html",
    "revision": "ffb435995a77eafd046e302574600d9a"
  },
  {
    "url": "blog/tag/ggplot-2/index.html",
    "revision": "04c0650d6ea85034b43e71c9fe054bd8"
  },
  {
    "url": "blog/tag/ggpubr/index.html",
    "revision": "c1881ed41c2bb1af94fa68332c253808"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "0cb95fb5366953165d32d1d132ab3038"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "bf06f20cc98d49eba1ab014d03fb075b"
  },
  {
    "url": "blog/tag/html/index.html",
    "revision": "c5e82a15378c8e1cc2418eaf5d1332f1"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "1e15ea7dd0aba52284a6ad828ce9beb9"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "9e81081cfce05d0dd43e65549c10a435"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "7203dd471fa7505d1c78dbed8b7a560c"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "3c8801409314ea7c20de798bf4aa24e8"
  },
  {
    "url": "blog/tag/lattice/index.html",
    "revision": "7d38e0b60f3d222c391f233ee625e3db"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "523e9e19906b0906055f3230dfd773c1"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "bf8d1ce140d13c54ed99485575ca62b2"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "db488843ed3efc2b1188831f80166f39"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "1b65d212de0d87bd3bfafea5f49ede9d"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "ec00ac76e32782f0c53fce642fd5b6c6"
  },
  {
    "url": "blog/tag/r/index.html",
    "revision": "aa215cb6cd5e6998b1da43be925c5443"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "7722879852decaa0bbf31970056e5661"
  },
  {
    "url": "blog/tag/rgl/index.html",
    "revision": "12b778d7c233eabec69fdd51aad87c46"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "374d859368f9737e03839e5aa438cccc"
  },
  {
    "url": "blog/tag/social-factors/index.html",
    "revision": "3b4b7bc18b71342fa9fc53cc81bf51a7"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "984cfce687201f52f2b5e182efa25d27"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "1d4fa2a383aecf299a5d1dee0a182ad5"
  },
  {
    "url": "blog/tag/tidyverse/index.html",
    "revision": "3e6ac70b7291094ec988e010609ecd5a"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "7d067bd0212c0cb1b058b3821610dbd1"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "f3a54e0d44120c0a99ac52349703e3b0"
  },
  {
    "url": "c0eea22f1b49b6f2a23e12a2dc801e20/img1.png",
    "revision": "c0eea22f1b49b6f2a23e12a2dc801e20"
  },
  {
    "url": "c1c39aa172bf6917b05d1eab697f27b6/img3.png",
    "revision": "c1c39aa172bf6917b05d1eab697f27b6"
  },
  {
    "url": "c6cc441d84feeafbdbb611d269db181b/img6.png",
    "revision": "c6cc441d84feeafbdbb611d269db181b"
  },
  {
    "url": "c944440f07a9819c3f73bbb95aa91b6a/sp_labels2.png",
    "revision": "c944440f07a9819c3f73bbb95aa91b6a"
  },
  {
    "url": "c9c3554184cabbe232393039b19492c0/Theme2.png",
    "revision": "c9c3554184cabbe232393039b19492c0"
  },
  {
    "url": "cd6f461faf6a5886f2fe62834cb84ec8dd40c0ec-9d1e7611d076a1439400.js"
  },
  {
    "url": "cd6f461faf6a5886f2fe62834cb84ec8dd40c0ec-9d1e7611d076a1439400.js.map",
    "revision": "ebd3c550c68c28a48f5a75bf47e60f10"
  },
  {
    "url": "ce0b325623f94aa7761c38e27508b1d6/rstudio3.png",
    "revision": "ce0b325623f94aa7761c38e27508b1d6"
  },
  {
    "url": "ce495cf4cddfab10605895c037545834/Colin_Angus.png",
    "revision": "ce495cf4cddfab10605895c037545834"
  },
  {
    "url": "cf4d725311c2fdf851f0b593d3a9f5b3/img2.jpg",
    "revision": "cf4d725311c2fdf851f0b593d3a9f5b3"
  },
  {
    "url": "cfb95ea008addc89a378c35355763e6c/Surface.png",
    "revision": "cfb95ea008addc89a378c35355763e6c"
  },
  {
    "url": "cfe6f1596bfe58e512d4951f0969c8c8/rgl.png",
    "revision": "cfe6f1596bfe58e512d4951f0969c8c8"
  },
  {
    "url": "chunk-map.json",
    "revision": "40a88ac8a37e81d00434a8efe32400bb"
  },
  {
    "url": "CNAME",
    "revision": "e5bb4691707c61fef4c161d206092770"
  },
  {
    "url": "community/index.html",
    "revision": "5b6da5768588197bb6f0a67ed179c839"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5ba91d208abaa2d8e59e.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5ba91d208abaa2d8e59e.js.map",
    "revision": "d06ed5d6607588f3e4c818152bf55bd3"
  },
  {
    "url": "component---src-pages-404-jsx-b6b1b3a373631993438d.js"
  },
  {
    "url": "component---src-pages-404-jsx-b6b1b3a373631993438d.js.map",
    "revision": "ddeb2cea69ea595fd0940db47e2d7270"
  },
  {
    "url": "component---src-pages-404-jsx-e89c5adba8668ed92826.js"
  },
  {
    "url": "component---src-pages-404-jsx-e89c5adba8668ed92826.js.map",
    "revision": "0199c81af0c47d2d845f1e32f73bbc66"
  },
  {
    "url": "component---src-pages-about-jsx-c4a55461f49e72c49ee1.js"
  },
  {
    "url": "component---src-pages-about-jsx-c4a55461f49e72c49ee1.js.map",
    "revision": "b003be33e538d07e9480450ea67b046d"
  },
  {
    "url": "component---src-pages-about-jsx-d4d7259138dc60276ed0.js"
  },
  {
    "url": "component---src-pages-about-jsx-d4d7259138dc60276ed0.js.map",
    "revision": "11e15bc9fc37b757bcb47becfeae8861"
  },
  {
    "url": "component---src-pages-accessibility-jsx-84bb8ed411f350d614b4.js"
  },
  {
    "url": "component---src-pages-accessibility-jsx-84bb8ed411f350d614b4.js.map",
    "revision": "ae36c958ad8d3a033d0587a17c6bd7fa"
  },
  {
    "url": "component---src-pages-community-jsx-a135df40df9762a2aae3.js"
  },
  {
    "url": "component---src-pages-community-jsx-a135df40df9762a2aae3.js.map",
    "revision": "711d64f9a4fd4209b770dc155cb08f69"
  },
  {
    "url": "component---src-pages-events-jsx-426cbfc6654f6fc84f6e.js"
  },
  {
    "url": "component---src-pages-events-jsx-426cbfc6654f6fc84f6e.js.map",
    "revision": "d1ff2370f40b28ed3cd70e6845e6a0a8"
  },
  {
    "url": "component---src-pages-events-jsx-6ecdfeb4af7b8aaf6daf.js"
  },
  {
    "url": "component---src-pages-events-jsx-6ecdfeb4af7b8aaf6daf.js.map",
    "revision": "26f2ed701a643cc1aaff1e45c3fe010e"
  },
  {
    "url": "component---src-pages-index-jsx-3224bd7b7144ba426306.js"
  },
  {
    "url": "component---src-pages-index-jsx-3224bd7b7144ba426306.js.map",
    "revision": "15db5a7192cb5a448ba8daa247e41a6e"
  },
  {
    "url": "component---src-pages-index-jsx-b273833a07bd12fdb9ad.js"
  },
  {
    "url": "component---src-pages-index-jsx-b273833a07bd12fdb9ad.js.map",
    "revision": "9c7c9655afaf5dab2d6aec5d58d272d9"
  },
  {
    "url": "component---src-pages-index-jsx-b67a41c04164bf6a9b68.js"
  },
  {
    "url": "component---src-pages-index-jsx-b67a41c04164bf6a9b68.js.map",
    "revision": "1f12056fc444a7b729dbba21ec463964"
  },
  {
    "url": "component---src-pages-privacy-jsx-9bda0c1ffef58902c5fc.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-9bda0c1ffef58902c5fc.js.map",
    "revision": "4a03fd742a5fcdcc146037a08b60b24e"
  },
  {
    "url": "component---src-pages-search-jsx-77574af326059371dd51.js"
  },
  {
    "url": "component---src-pages-search-jsx-77574af326059371dd51.js.map",
    "revision": "1e339fae08ea4756f20e32c53c733d2a"
  },
  {
    "url": "component---src-pages-search-jsx-da6996666f3a55504c8d.js"
  },
  {
    "url": "component---src-pages-search-jsx-da6996666f3a55504c8d.js.map",
    "revision": "d81e68fa1a954d520d7cd37092fbdc87"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-25fd21e2fcdd10bb92cf.js"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-25fd21e2fcdd10bb92cf.js.map",
    "revision": "5208001edbce8ad70b98ee0f16103312"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-411f9e030adda8f00a66.js"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-411f9e030adda8f00a66.js.map",
    "revision": "1400f57cb20472fa1677134e3061dc10"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-073fa8bd0872690e7e8f.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-073fa8bd0872690e7e8f.js.map",
    "revision": "f549b1ba8ebca9603bb9a01e6ac12b8b"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-843f4ba9b487eb1c2496.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-843f4ba9b487eb1c2496.js.map",
    "revision": "7926ab90fa8e287f7af27580b283bc52"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-e1f0592066394d87135b.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-e1f0592066394d87135b.js.map",
    "revision": "f137a3626a98a50bb25fda6ff8d7f9dc"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-58b84135b4d952e78770.js"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-58b84135b4d952e78770.js.map",
    "revision": "2e72b6542351611758ff436bd96bb10c"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-aa21c1252cbaa611be16.js"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-aa21c1252cbaa611be16.js.map",
    "revision": "1b11f583da1c884f55836fccfa1e5a7a"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-3fc058818aca8bda24cf.js"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-3fc058818aca8bda24cf.js.map",
    "revision": "c91f472417c354d894c2c65b99de9cbd"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-45b18a6f748e66d5ea35.js"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-45b18a6f748e66d5ea35.js.map",
    "revision": "a0986e75486f934ce4c52cb00b85adc6"
  },
  {
    "url": "d208a25a86562dd71c41ba95f7546627/ggplotBlank.png",
    "revision": "d208a25a86562dd71c41ba95f7546627"
  },
  {
    "url": "d227ea25fb93882cf5cad614b9deeb7f/img4.png",
    "revision": "d227ea25fb93882cf5cad614b9deeb7f"
  },
  {
    "url": "d3/d3js_for_dataviz.js"
  },
  {
    "url": "d3/dataviz.js"
  },
  {
    "url": "d3/dist/d3js_for_dataviz.dev.js"
  },
  {
    "url": "d3/dist/dataviz.dev.js"
  },
  {
    "url": "d482a2bd82604992ea37ab425fcd95c9/img13.png",
    "revision": "d482a2bd82604992ea37ab425fcd95c9"
  },
  {
    "url": "d706d7115f6f55e0119134f15bc0178a/Fig6.png",
    "revision": "d706d7115f6f55e0119134f15bc0178a"
  },
  {
    "url": "d7eeaac4-4220932460fbdf94518b.js"
  },
  {
    "url": "d7eeaac4-4220932460fbdf94518b.js.map",
    "revision": "86af00b0b11bc7c8c332e62fdf333bcd"
  },
  {
    "url": "d8e90b6d2733655bded268952633def1/img3.png",
    "revision": "d8e90b6d2733655bded268952633def1"
  },
  {
    "url": "da82f0ec8e46aa78ee29c58673f94d00/img7.png",
    "revision": "da82f0ec8e46aa78ee29c58673f94d00"
  },
  {
    "url": "dba3324f4142f375d19268a54c60e915/output_32_1.png",
    "revision": "dba3324f4142f375d19268a54c60e915"
  },
  {
    "url": "de71a805-a41316f9e8bf17ec341b.js"
  },
  {
    "url": "de71a805-a41316f9e8bf17ec341b.js.map",
    "revision": "c8ab47e977fb34e21514fc408591ff58"
  },
  {
    "url": "e04c37380dca28669fa92eac59ceffc1/Fig3.png",
    "revision": "e04c37380dca28669fa92eac59ceffc1"
  },
  {
    "url": "e30e471cc42b0550ad39ff8c40d6c078/output_16_1.png",
    "revision": "e30e471cc42b0550ad39ff8c40d6c078"
  },
  {
    "url": "e3894ca278407b744059dd5fa168dc0c/Ermentrout.png",
    "revision": "e3894ca278407b744059dd5fa168dc0c"
  },
  {
    "url": "e44d2e8c61221320a6dce9ec5016fe98/saveImg.png",
    "revision": "e44d2e8c61221320a6dce9ec5016fe98"
  },
  {
    "url": "e4be2d5d36c833a13ad91fe8cc0b72f2/hexbinPlot.png",
    "revision": "e4be2d5d36c833a13ad91fe8cc0b72f2"
  },
  {
    "url": "e5000396a4f7ac960b66debd0ef47352/Fig4.gif",
    "revision": "e5000396a4f7ac960b66debd0ef47352"
  },
  {
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-49ea79c02d830c3c3ecd.js"
  },
  {
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-49ea79c02d830c3c3ecd.js.map",
    "revision": "56226b424adb2b502571829d8d464d37"
  },
  {
    "url": "e79de403c487f46cc2c02dc4cad8fe76/BlogBreakdown.png",
    "revision": "e79de403c487f46cc2c02dc4cad8fe76"
  },
  {
    "url": "e871a4b80ef736b0894bd99e6063d8a0/sp_final.png",
    "revision": "e871a4b80ef736b0894bd99e6063d8a0"
  },
  {
    "url": "events/index.html",
    "revision": "17db13cb769c7799d5b356fa1657be74"
  },
  {
    "url": "f132b4caf23a2eb84ad4c68e52fe1df6/Fig7.png",
    "revision": "f132b4caf23a2eb84ad4c68e52fe1df6"
  },
  {
    "url": "f19704a092dc0f7a75a1a7a37b13cec7/Fig2.png",
    "revision": "f19704a092dc0f7a75a1a7a37b13cec7"
  },
  {
    "url": "f2125eef0963be539792380e28a5d9ea/sp_label.png",
    "revision": "f2125eef0963be539792380e28a5d9ea"
  },
  {
    "url": "f3eeeefc72334f5f5c13a45b961ed8ce/data2.png",
    "revision": "f3eeeefc72334f5f5c13a45b961ed8ce"
  },
  {
    "url": "f4ea99fb7f507e5d29383ece5079d3f1/Fig8.jpg",
    "revision": "f4ea99fb7f507e5d29383ece5079d3f1"
  },
  {
    "url": "f809e3e6ff34dfcb2e726a03b56c47a0/Fig2.png",
    "revision": "f809e3e6ff34dfcb2e726a03b56c47a0"
  },
  {
    "url": "f89ccb1bcb05aa1b57c2bb6f965ea322/Colour Scales.png",
    "revision": "f89ccb1bcb05aa1b57c2bb6f965ea322"
  },
  {
    "url": "f96c22e5da24ad6284916dc2420fc04d/img5.png",
    "revision": "f96c22e5da24ad6284916dc2420fc04d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b3ce05f343aecae60fbeb68d36f04bd0"
  },
  {
    "url": "fb16343b545125a2840699b1215cafe3/Fig5.jpg",
    "revision": "fb16343b545125a2840699b1215cafe3"
  },
  {
    "url": "fc793935fef334c225b42aab0fd70a7e/solution.jpg",
    "revision": "fc793935fef334c225b42aab0fd70a7e"
  },
  {
    "url": "fd2d512dc3280986741babd5e53ba9c7/img2.png",
    "revision": "fd2d512dc3280986741babd5e53ba9c7"
  },
  {
    "url": "fdb1e2f7472aa185ca0212ced955456e/Sheffield_Hackathon_Map_Output.png",
    "revision": "fdb1e2f7472aa185ca0212ced955456e"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "30553671163f0f7363f2ce92def4484a"
  },
  {
    "url": "framework-f386f195940cf9f6d908.js"
  },
  {
    "url": "framework-f386f195940cf9f6d908.js.map",
    "revision": "79e9aea2687947950b32e38975666950"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "2091b3b60559c118de5858f74ef1a8ec"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "46792e6bed4f3dc3b5e22c9056a8f23f"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "5009087d9ae45c23d51f7e3cdf5774b9"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "6daf448f06e922ccc5fb4b19a2ca3f8c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "c8fe6877ce281395ede5fa3efa531e68"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "2dd2b149131cf4210a625c59d0b0ab0d"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "2b91d19ffefe934ef7f3a316395d0d94"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "27779f3acac8644ad8ffe38fad2d0ed1"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "6490b65b3f03a1543e062f302d42a31f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d0b5c4f27de19af677b8e979a75d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "340c26ff5a35d463bdf7926ee1229c02"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "548e9c6655e688768583a7ec81afb994"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e1d1232f70eb57bf56994354e9d741ad"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "534f7202ade34edb02179bd228f1a18b"
  },
  {
    "url": "page-data/accessibility/page-data.json",
    "revision": "c9072986500af0b781362f43bf494235"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "03c7ebaaabc72c157e1bfb3ad896d19e"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising-high-risk-areas-for-covid-19-mortality/page-data.json",
    "revision": "f47bd640909baf7fe8c68c92caed2eac"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz-stats-1/page-data.json",
    "revision": "ceb40dcdc1a8c0a96a06e3afac357be2"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy-Your-Dash-App/page-data.json",
    "revision": "61249ea1c4e6fa495a02d3a58d02629c"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath-Introduction/page-data.json",
    "revision": "d46b746f2080ec275e34e27b81103ae0"
  },
  {
    "url": "page-data/blog/04/06/2020/dash-tutorial/page-data.json",
    "revision": "c50d9cd4ccd902b9eb726cf8e3913575"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath-Lab/page-data.json",
    "revision": "2bc3761a83c21f8ff94899bb9d6cdba4"
  },
  {
    "url": "page-data/blog/05/02/2021/Shiny-Template/page-data.json",
    "revision": "b5cdf29eb114308788481fe20a4f9a11"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath-Workflow/page-data.json",
    "revision": "aa847937b3ee8cfb8cb844b30522791b"
  },
  {
    "url": "page-data/blog/05/09/2020/challenges-in-visualising-data/page-data.json",
    "revision": "fd0a1ac0f9f4b8af14b8e99cb8b77276"
  },
  {
    "url": "page-data/blog/06/04/2020/chart-choice/page-data.json",
    "revision": "3b659b5f8592c067ebd4dbab40779846"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour-Schemes/page-data.json",
    "revision": "a7c4457aa29e8284bd74acc315c5211e"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz-stats-2/page-data.json",
    "revision": "9a986cd429aa62b6a24eee90c5d6bf41"
  },
  {
    "url": "page-data/blog/08/10/2020/moving-from-excel-to-r/page-data.json",
    "revision": "e5bc28cdc9ccfb0f78a7a372d220864c"
  },
  {
    "url": "page-data/blog/09/09/2020/data-visualizations-social-role/page-data.json",
    "revision": "5c890705d8ceb3a27ececd5a75a0b424"
  },
  {
    "url": "page-data/blog/11/06/2020/simple-data-visualisations-have-become-key-to-communicating-about-the-COVID-19-pandemic/page-data.json",
    "revision": "0962e94c77af868285bb6bd296a4b957"
  },
  {
    "url": "page-data/blog/12/06/2020/dash-tutorial-2/page-data.json",
    "revision": "53b8768125f5477a5ae341e888aba426"
  },
  {
    "url": "page-data/blog/15/01/2021/Data-Processing-In-R/page-data.json",
    "revision": "c2a306c157d895a161a18c5662472234"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter-Widgets/page-data.json",
    "revision": "91dfb5099f928468e228dab2fccb4886"
  },
  {
    "url": "page-data/blog/16/07/2020/python-visualisation-templates/page-data.json",
    "revision": "b9636e1b8ed7965d8d4740758d6050df"
  },
  {
    "url": "page-data/blog/18/08/2020/GM/page-data.json",
    "revision": "38099c7a8c347c4cc85ef27f9649e84c"
  },
  {
    "url": "page-data/blog/20/01/2021/Static-Visualisations-In-R/page-data.json",
    "revision": "b7dcce4466baa5dd92f6c90ec31bed9a"
  },
  {
    "url": "page-data/blog/20/05/2020/Non-Numeric/page-data.json",
    "revision": "5dfebaf359e092ee2dbfd0f0de938eda"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute-blog-post/page-data.json",
    "revision": "3f02abdca0f46d10d7ebe028d0e04c4c"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub-guide/page-data.json",
    "revision": "5efd76cb25f60dad3cfed83cc4e01690"
  },
  {
    "url": "page-data/blog/24/06/2020/host-jupyter-notebook/page-data.json",
    "revision": "44a53afdfa720e0bc06ed892731d1ba3"
  },
  {
    "url": "page-data/blog/25/01/2021/Morphologica/page-data.json",
    "revision": "283043a232798bcc102f4ce7efbab704"
  },
  {
    "url": "page-data/blog/26/08/2020/D3js-for-data-visualisation/page-data.json",
    "revision": "2475bb914fe69a5e6c219a95d2b9701f"
  },
  {
    "url": "page-data/blog/27/01/2021/Interactive-Visualisations-In-R/page-data.json",
    "revision": "545794323282a6c2ea2b6b674bca1615"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban-Observatories-hackathon/page-data.json",
    "revision": "ff607c8980ca4b4db414b6107ec51cf5"
  },
  {
    "url": "page-data/blog/30/09/2020/making-the-best-data-visualisations-in-excel/page-data.json",
    "revision": "f975e4f46322f50c6092bbd3c44cb710"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "b3f82be37d1cd83f6f963787b1facda3"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "d4127a33d8f09f09ea41139b582ac0e9"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "c9da4672e35404958b05d16587827ea3"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "e7aa353a60c43a9ed503c53ea2f59b90"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "97c71843a949153c391c703e5812c98c"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "a34a5149db4cf8ab6cb3798dc1920d1d"
  },
  {
    "url": "page-data/blog/page/3/page-data.json",
    "revision": "465a3d0da7c886717252c54259eef1bb"
  },
  {
    "url": "page-data/blog/tag/best-practice/page-data.json",
    "revision": "2e76aea9e3c87ec62ce01c1d67c3ce1d"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "cebeeebc53510f4b081cdbd4f8864ef7"
  },
  {
    "url": "page-data/blog/tag/c/page-data.json",
    "revision": "902a27277869fd3081f08c2ad3349db3"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "ab89624eb1f2fbf14b81a29d8f0a0acb"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "81d287e33bdb87bac3b77de95dfdb788"
  },
  {
    "url": "page-data/blog/tag/d-3-js/page-data.json",
    "revision": "e5d2dea028f4d1b158aa0ff45fb8601f"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "bbb1132ca9aeac04f4d241858cef3b54"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "0d7cde23f4b2774de3f44dca2bb1fb9d"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "e8ebc2f9570e1464fb0c05a3c2ce4d2a"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "e5d511cc96319c04c0782db2ac503416"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "5ea66b6e3c800b5b164ad1d98fcc0288"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "3e3fce4bd458e42028a8dc4b8469f2e7"
  },
  {
    "url": "page-data/blog/tag/effectiveness/page-data.json",
    "revision": "0b71cec7ddc23096378223f2816845d1"
  },
  {
    "url": "page-data/blog/tag/effects/page-data.json",
    "revision": "6f055eee7f373b1058f2e99ef73b8f2e"
  },
  {
    "url": "page-data/blog/tag/emotions/page-data.json",
    "revision": "ba1858ba266c480af51ff2a1831d6340"
  },
  {
    "url": "page-data/blog/tag/engaging-with-dataviz/page-data.json",
    "revision": "c1068761dda842066d7dcbbb08f6dd0b"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "de990f0d8c7fa7599b1f1e52c54cb23a"
  },
  {
    "url": "page-data/blog/tag/excel/page-data.json",
    "revision": "dddbc43e571973800377fe58a00a4333"
  },
  {
    "url": "page-data/blog/tag/ggplot-2/page-data.json",
    "revision": "40547c138c4b9291143407177d9824f4"
  },
  {
    "url": "page-data/blog/tag/ggpubr/page-data.json",
    "revision": "c0a53d13b2d37d6bcdc90f15af44e709"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "953f236952bbd2cc51d6c174e5643c24"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "888a66bc721045fc6024608c9af5162c"
  },
  {
    "url": "page-data/blog/tag/html/page-data.json",
    "revision": "cda87c689129c698bd834ffeb1fb251d"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "b06c13b1b3e4b776b5564e945fae414e"
  },
  {
    "url": "page-data/blog/tag/javascript/page-data.json",
    "revision": "09621777934deb2672e207c06dc3aea9"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "216cb27ba5376d9e0224ed1e0a3d54cc"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "f3587041d3098167dda82884759ac769"
  },
  {
    "url": "page-data/blog/tag/lattice/page-data.json",
    "revision": "d3ff87a20dd24cbb54f517d6cd2168fa"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "3c30b1d414b4e03b8376cdebf9f73a0a"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "bedcb6309894226a0f12219f5c229b06"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "1469189e98cdd10d0a07c83a8eb04862"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "417a79e53ec7870cb616b202eee6c472"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "cb6d449ac6a6bfdb8892e5dcc46c9fc3"
  },
  {
    "url": "page-data/blog/tag/r/page-data.json",
    "revision": "8aff485002c69673eb6e7f746bc39973"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "479476569aad64ea8d72caf17aefe995"
  },
  {
    "url": "page-data/blog/tag/rgl/page-data.json",
    "revision": "d62f9c90f89e7411fee924254ca45737"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "82fd5fc809834cf8055a11eea94a37c5"
  },
  {
    "url": "page-data/blog/tag/social-factors/page-data.json",
    "revision": "538e86b219c92d620c6ac200049f6cb7"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "b7c0ae5a7264d472cd45c31f17d9b18a"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "fc972fb2a316fbd87983f4ff40760e40"
  },
  {
    "url": "page-data/blog/tag/tidyverse/page-data.json",
    "revision": "475a5fc21f649c750e58503f90088541"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "20eab4b3a3d95a65b9c9ddb008c0a263"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "76015240c3fc6660c0c2c17f7219190d"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "c224ca504da549d4dcebb75e51bb766c"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "6a4608a30a814af7e555fd1e28973658"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "bb55857283c1f3f24cda957f55c96b11"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "56801ac39d165648aff6b297cd482a6d"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "ada6d6a8a1de7d6fe4d4940797f5d714"
  },
  {
    "url": "page-data/sq/d/1454382005.json",
    "revision": "61508b4377957ad362f9a4c07cc8a31d"
  },
  {
    "url": "page-data/sq/d/1792964189.json",
    "revision": "956b5a84a733011cef4ee50ccea02802"
  },
  {
    "url": "page-data/sq/d/2676937355.json",
    "revision": "c9e03f93202f057ac20046d008924377"
  },
  {
    "url": "page-data/sq/d/2772118594.json",
    "revision": "28421a86459411a1addef03952ef15b7"
  },
  {
    "url": "page-data/sq/d/2868699018.json",
    "revision": "3891c63f544655726f46ade68cad1c2b"
  },
  {
    "url": "page-data/sq/d/3370916995.json",
    "revision": "03c0cc0e7ddec60988d51d6844b4976a"
  },
  {
    "url": "page-data/sq/d/4157404630.json",
    "revision": "8b8d71427c3877e207827583513a154d"
  },
  {
    "url": "page-data/sq/d/501939828.json",
    "revision": "f31acaf328c912c170bb50db7e550a43"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "30b2a1e655f94558cde55b82507f4883"
  },
  {
    "url": "polyfill-1fed80b5ec878f98a45b.js"
  },
  {
    "url": "polyfill-1fed80b5ec878f98a45b.js.map",
    "revision": "04bc584c83a9669d672e0dcbe594a50e"
  },
  {
    "url": "privacy/index.html",
    "revision": "91dde4f317f996a22da82dce6c268653"
  },
  {
    "url": "search/index.html",
    "revision": "1599e7e7a9a972bdd00e844eec7e2911"
  },
  {
    "url": "sitemap-pages.xml",
    "revision": "ef1512f34ff425a7aa524fae8be6d534"
  },
  {
    "url": "sitemap-posts.xml",
    "revision": "2c3d042e5968f2e60b6873c160e12c06"
  },
  {
    "url": "sitemap.xml",
    "revision": "00100550c3afdc98a362adaf61482358"
  },
  {
    "url": "sitemap.xsl",
    "revision": "84eed71bbf820506ceb395ae16c91e89"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/21302/dataviz.jpg"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/801b3/dataviz.jpg"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/cd873/dataviz.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/2244e/Y.L_Weng.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/2e97c/Y.L_Weng.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/f836f/Y.L_Weng.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/1df11/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/34f1d/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/39fae/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/8fb7e/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/b1e91/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/ce222/community.jpg"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/497c6/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/69585/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/dff58/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/ee604/LetterIcon.png"
  },
  {
    "url": "static/1b950aec9371d81fecb003f21d10c274/c01e2/Seb_J.jpg"
  },
  {
    "url": "static/1b950aec9371d81fecb003f21d10c274/f836f/Seb_J.jpg"
  },
  {
    "url": "static/2ec5c103f287dc87d926d899bc31b225/833d8/rosie_h.jpg"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/497c6/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/5707d/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/69585/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/ce507/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/ee604/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/f3583/ShinyThumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/196bc/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/497c6/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/69585/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/ee604/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/f3583/thumb.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/108cb/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/497c6/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/69585/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/ee604/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/f3583/Fig1.png"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/2244e/login_sm4.jpg"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/82eb6/login_sm4.jpg"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/f836f/login_sm4.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/39fae/chair.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/b1e91/chair.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/ce222/chair.jpg"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/0f447/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/497c6/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/69585/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/ee604/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/f3583/thumb.png"
  },
  {
    "url": "static/520f2ff84f05bad12a0e30618fa5e593/684c4/joe_h.jpg"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/017d7/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/497c6/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/69585/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/ee604/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/f3583/GM_Thumb.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/09a85/Fig1.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/497c6/Fig1.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/69585/Fig1.png"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/78a35/moon.jpg"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/e66c2/moon.jpg"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/f01d2/moon.jpg"
  },
  {
    "url": "static/7711a87621c0c4a65462df1b7fbfb241/684c4/angus_t.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/0e329/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/14b42/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/2244e/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/47498/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/d8255/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/f836f/bg.jpg"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/3ee52/Fig1.png"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/497c6/Fig1.png"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/69585/Fig1.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/497c6/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/69585/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/ac98b/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/ee604/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/f3583/thumb.png"
  },
  {
    "url": "static/871859109b0659b0d6a48ae540cb439e/46991/dataviz.png"
  },
  {
    "url": "static/871859109b0659b0d6a48ae540cb439e/69585/dataviz.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/497c6/Charts_Thumb.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/69585/Charts_Thumb.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/7dac8/Charts_Thumb.png"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/2244e/img_1.jpg"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/f422e/img_1.jpg"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/f836f/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/2244e/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/f422e/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/f836f/img_1.jpg"
  },
  {
    "url": "static/about-d1b3607045b93bc9f47f2edab8393a23.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/0e329/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/14b42/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/2244e/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/47498/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/d8255/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/f836f/temp.jpg"
  },
  {
    "url": "static/b6f432ec1b47d139d904d5025714b073/148b8/helen_k.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/0e329/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/14b42/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/2244e/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/47498/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/e731c/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/f836f/Dash1.jpg"
  },
  {
    "url": "static/bg-d2e315389be310ad1df988334939fa79.jpg"
  },
  {
    "url": "static/bg1-5fff908ab0abc7a6edf3a19225c0b9a5.jpg"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/497c6/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/5707d/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/69585/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/d98bf/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/ee604/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/f3583/thumb.png"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/0f3a1/8389.jpg"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/2244e/8389.jpg"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/f836f/8389.jpg"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/104b3/no_image_4.png"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/88c65/no_image_4.png"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/ca599/no_image_4.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/497c6/PPCirc.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/69585/PPCirc.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/c6e25/PPCirc.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/1b680/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/497c6/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/69585/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/ee604/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/f3583/R.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/497c6/Surface.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/5b6ba/Surface.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/69585/Surface.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/ee604/Surface.png"
  },
  {
    "url": "static/com_1-a0e4c0689c63024715127c5e741bd8a6.jpg"
  },
  {
    "url": "static/com_2-e649ff42b2d4ee96bdbc1606d1308a65.jpg"
  },
  {
    "url": "static/COVIDDeathPropMSOA-6008149dc156a93bcd039c1eb92ce147.png"
  },
  {
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/2244e/jez_c.jpg"
  },
  {
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/f836f/jez_c.jpg"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/0f447/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/497c6/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/69585/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/ee604/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/f3583/thumb.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/4589b/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/497c6/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/69585/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/ee604/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/f3583/thumb1.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/497c6/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/65595/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/69585/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/ee604/thumb.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/497c6/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/5707d/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/69585/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/ee604/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/f3583/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/google-6f52b93ba7863140c2badef18ed17a97.png"
  },
  {
    "url": "static/its-bf42e10ede6fc9096548ea038be6d3ec.png"
  },
  {
    "url": "static/KaTeX_AMS-Regular-2dbe16b4f4662798159f8d62c8d2509d.ttf"
  },
  {
    "url": "static/KaTeX_AMS-Regular-38a68f7d18d292349a6e802a66136eae.woff2"
  },
  {
    "url": "static/KaTeX_AMS-Regular-7d307e8337b9559e4040c5fb76819789.woff"
  },
  {
    "url": "static/KaTeX_Caligraphic-Bold-33d26881e4dd89321525c43b993f136c.ttf"
  },
  {
    "url": "static/KaTeX_Caligraphic-Regular-5e7940b4ed250e98a512f520e39c867d.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-4de87d40f0389255d975c69d45a0a7e7.woff"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-7a3757c0bfc580d91012d092ec8f06cb.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-ed330126290a846bf0bb78f61aa6a080.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-450cc4d9319c4a438dd00514efac941b.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-82d05fe2abb0da9d1077110efada0f6e.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-dc4e330b6334767a16619c60d9ebce8c.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-2e1915b1a2f33c8ca9d1534193e934d7.ttf"
  },
  {
    "url": "static/KaTeX_Main-Bold-62c69756b3f1ca7b52fea2bea1030cd2.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-78b0124fc13059862cfbe4c95ff68583.woff2"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-0d817b487b7fc993bda7dddba745d497.ttf"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-a2e3dcd2316f5002ee2b5f35614849a8.woff"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-c7213ceb79250c2ca46cc34ff3b1aa49.woff2"
  },
  {
    "url": "static/KaTeX_Main-Italic-081073fd6a7c66073ad231db887de944.woff"
  },
  {
    "url": "static/KaTeX_Main-Italic-767e06e1df6abd16e092684bffa71c38.ttf"
  },
  {
    "url": "static/KaTeX_Main-Italic-eea32672f64250e9d1dfb68177c20a26.woff2"
  },
  {
    "url": "static/KaTeX_Main-Regular-689bbe6b67f22ffb51b15cc6cfa8facf.ttf"
  },
  {
    "url": "static/KaTeX_Main-Regular-756fad0d6f3dff1062cfa951751d744c.woff"
  },
  {
    "url": "static/KaTeX_Main-Regular-f30e3b213e9a74cf7563b0c3ee878436.woff2"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-753ca3dfa44302604bec8e08412ad1c1.woff2"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-b3e80ff3816595ffb07082257d30b24f.woff"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-d9377b53f267ef7669fbcce45a74d4c7.ttf"
  },
  {
    "url": "static/KaTeX_Math-Italic-0343f93ed09558b81aaca43fc4386462.ttf"
  },
  {
    "url": "static/KaTeX_Math-Italic-2a39f3827133ad0aeb2087d10411cbf2.woff2"
  },
  {
    "url": "static/KaTeX_Math-Italic-67710bb2357b8ee5c04d169dc440c69d.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-59b3773389adfb2b21238892c08322ca.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-dfcc59ad994a0513b07ef3309b8b5159.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-f28c4fa28f596796702fea3716d82052.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-3ab5188c9aadedf425ea63c6b6568df7.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-99ad93a4600c7b00b961d70943259032.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-9d0fdf5d7d27b0e3bdc740d90b40ec57.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-6c3bd5b57f7eba215a2d37e2e28077f1.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-badf3598c22478fd9155a49391ecd396.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-d511ebcef253ab53775576f28315f350.ttf"
  },
  {
    "url": "static/KaTeX_Script-Regular-082640ca4242bb2aade86855e4d7d5f6.ttf"
  },
  {
    "url": "static/KaTeX_Script-Regular-4edf4e0fd49c8a5680dd541c05f16a4c.woff"
  },
  {
    "url": "static/KaTeX_Script-Regular-af7bc98b2200573686405dc784f53cf2.woff2"
  },
  {
    "url": "static/KaTeX_Size1-Regular-2c2dc3b057bb48b80bc785ac3d87ecf8.ttf"
  },
  {
    "url": "static/KaTeX_Size2-Regular-114ad19833311359052ad1a174159262.ttf"
  },
  {
    "url": "static/KaTeX_Size4-Regular-70174da79d1707501c10e07872e84667.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-35fe2cce0791c276b8e919decd873f5b.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-53dcf861876aae6f3a6a6004dc3bc758.woff"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-641339e2cd86c7816bfb8028ee7f86e0.woff2"
  },
  {
    "url": "static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"
  },
  {
    "url": "static/no_image_2-8588841d1e101e5cd1794737b8392414.png"
  },
  {
    "url": "static/no_image_3-5fff908ab0abc7a6edf3a19225c0b9a5.png"
  },
  {
    "url": "static/no_image_4-c823d2bf145dd881fe77c9265116b3e8.png"
  },
  {
    "url": "static/no_image_5-0b0b76e89033963a72b34200d192a851.png"
  },
  {
    "url": "static/orda_logo-d4442f31f9acafdb4dc5c2b1bc509071.png"
  },
  {
    "url": "static/rse-6449112d7c9c5b6e83469baf7a3071fc.png"
  },
  {
    "url": "static/TUOSlogo-b500c122c2226f80b16ecd110ff62e48.png"
  },
  {
    "url": "static/user1-dc7c51f98d395f38d7b70e2962cb5329.png"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js.map",
    "revision": "8236b01a896fb556d1c5d0d4488443d5"
  },
  {
    "url": "styles.7c4da9a069ca858cf900.css"
  },
  {
    "url": "webpack-runtime-8d8d634b8b2f43dc4e53.js"
  },
  {
    "url": "webpack-runtime-8d8d634b8b2f43dc4e53.js.map",
    "revision": "320db96fda5084cc5913649d2e4207ab"
  },
  {
    "url": "webpack-runtime-a4832201d62300955215.js"
  },
  {
    "url": "webpack-runtime-a4832201d62300955215.js.map",
    "revision": "7e3137e0c86ada4b9868dc5264bafc28"
  },
  {
    "url": "webpack-runtime-eedab6606fe204ce0b73.js"
  },
  {
    "url": "webpack-runtime-eedab6606fe204ce0b73.js.map",
    "revision": "cc3675881bfab169ed169069f2d1443f"
  },
  {
    "url": "webpack.stats.json",
    "revision": "cee716e0eff7d65984d0980475b62986"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-6249dded844ec09ac6d9.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
