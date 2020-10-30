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
    "url": "0084a7dd7fc8dd52a4f7c88b47142078/index.mdx",
    "revision": "0084a7dd7fc8dd52a4f7c88b47142078"
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
    "url": "1bfc9850-23cd5f3773e76fa97c13.js"
  },
  {
    "url": "1bfc9850-23cd5f3773e76fa97c13.js.map",
    "revision": "98e9c9dde8d00923f9728a71f20604ca"
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
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-048ab9e00a2d7aafd433.js"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-048ab9e00a2d7aafd433.js.map",
    "revision": "051229005a2519b9b44eaeabf6096ce8"
  },
  {
    "url": "2b34a3ff3736da40afaf4b7a5922ddb9/login_long.jpg",
    "revision": "2b34a3ff3736da40afaf4b7a5922ddb9"
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
    "url": "3d980ef5e583bbb3a8c271f16a7b8847/barPlot.png",
    "revision": "3d980ef5e583bbb3a8c271f16a7b8847"
  },
  {
    "url": "3e5c819d98181d0f0d3a619b42137200/TypesofData.png",
    "revision": "3e5c819d98181d0f0d3a619b42137200"
  },
  {
    "url": "404.html",
    "revision": "5909ffb0159cb9ab9ea30267bdcf2e0c"
  },
  {
    "url": "404/index.html",
    "revision": "0817eeae1d0fb86ba2dfb5a2eeca4dde"
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
    "url": "503d8eb81732a0fe3895c085d0c467c1/pieChart2.png",
    "revision": "503d8eb81732a0fe3895c085d0c467c1"
  },
  {
    "url": "52d4677e3ba0379f6160744cf6d82782/Fig7.jpg",
    "revision": "52d4677e3ba0379f6160744cf6d82782"
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
    "url": "999bd8b8776d289d6ab0a525ed66722e/filtermpg.png",
    "revision": "999bd8b8776d289d6ab0a525ed66722e"
  },
  {
    "url": "9bed7912d99f2b67ca7f100b1e8864fc/Fig3.png",
    "revision": "9bed7912d99f2b67ca7f100b1e8864fc"
  },
  {
    "url": "a0f1a88da99c38bdb88ff0985519a90a/Fig2.png",
    "revision": "a0f1a88da99c38bdb88ff0985519a90a"
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
    "revision": "43b1048aa56e2c73d1be4c4e3bd74bc6"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "accessibility/index.html",
    "revision": "147cab35900843b4b32217a7af2610d4"
  },
  {
    "url": "adb95786ee5c22fc51746113cb541f06/Fig4.png",
    "revision": "adb95786ee5c22fc51746113cb541f06"
  },
  {
    "url": "app-56b6f033b7df1922abd5.js"
  },
  {
    "url": "app-56b6f033b7df1922abd5.js.map",
    "revision": "96cf54c41121c876ec389e2ccadc97e4"
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
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-fc0bab1693d2c33be2f9.js"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-fc0bab1693d2c33be2f9.js.map",
    "revision": "d9b81ac263d4a5b310cfbb3add8c92a3"
  },
  {
    "url": "b98bc7c3-0073e86f6c60b4c7b6fb.js"
  },
  {
    "url": "b98bc7c3-0073e86f6c60b4c7b6fb.js.map",
    "revision": "422c1f2ec266a3b168e8c8739a256b69"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-712546de8099b58bf82b.js"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-712546de8099b58bf82b.js.map",
    "revision": "59777f509859c9cb23eddec5dbb7a46b"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js.map",
    "revision": "b0b7d081034c2bd77337841dcb2f5505"
  },
  {
    "url": "blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/index.html",
    "revision": "2f3a7c9570dd0ebc28ebc228c74a6937"
  },
  {
    "url": "blog/01/10/2020/moving-from-excel-to-r/index.html",
    "revision": "08d9482eca81d310821c9d20281077dc"
  },
  {
    "url": "blog/02/05/2020/dataviz-stats-1/index.html",
    "revision": "7e2ce9d576bc592af97c71e35fd8acad"
  },
  {
    "url": "blog/03/07/2020/Deploy-Your-Dash-App/index.html",
    "revision": "9fbfe07ae04509032fefc6ca95449996"
  },
  {
    "url": "blog/03/07/2020/LearningPath-Introduction/index.html",
    "revision": "61eec1e913cfc291a69da8a05e81036e"
  },
  {
    "url": "blog/04/06/2020/dash-tutorial/index.html",
    "revision": "60f9a17a16184b8ba7812832873480c9"
  },
  {
    "url": "blog/04/07/2020/LearningPath-Lab/index.html",
    "revision": "d101fbb608beb62731ba698d93b714a2"
  },
  {
    "url": "blog/05/07/2020/LearningPath-Workflow/index.html",
    "revision": "a2e1ed3d96cd47f460681bbfaa387d1d"
  },
  {
    "url": "blog/05/09/2020/challenges_in_visualising_data/index.html",
    "revision": "b93ce7320515e75781191d9d910c8269"
  },
  {
    "url": "blog/06/04/2020/chart-choice/index.html",
    "revision": "a2b7f46199bbf7401b420f6b5edc9962"
  },
  {
    "url": "blog/06/05/2020/Colour-Schemes/index.html",
    "revision": "eb67fdb60512d65044453d38cd01eae0"
  },
  {
    "url": "blog/07/05/2020/dataviz-stats-2/index.html",
    "revision": "2f2778cd5224c1e4f21a3fa8be5afe9b"
  },
  {
    "url": "blog/09/09/2020/data_visualizations_social_role/index.html",
    "revision": "2bab15bf8bba98c5575c72c50623bb08"
  },
  {
    "url": "blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/index.html",
    "revision": "c98c3e3e806de310c56bb01a0df27232"
  },
  {
    "url": "blog/12/06/2020/dash-tutorial-2/index.html",
    "revision": "b604b6aaebe9ced5fabcd13870bfc0ae"
  },
  {
    "url": "blog/13/07/2020/Shiny-Template/index.html",
    "revision": "fd6b63387652074d05dd75dd3fb2ad1b"
  },
  {
    "url": "blog/16/06/2020/Jupyter-Widgets/index.html",
    "revision": "af5ca10b3ab1940025ec97f85bcc5fdd"
  },
  {
    "url": "blog/16/07/2020/python-visualisation-templates/index.html",
    "revision": "8ea781c543388177e9463a322351848d"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "7f89a3d53cd256ab178524e0b9b1ca43"
  },
  {
    "url": "blog/20/05/2020/Non-Numeric/index.html",
    "revision": "6370ee895a419d925ac2cd50a3b97e31"
  },
  {
    "url": "blog/22/03/2020/contribute-blog-post/index.html",
    "revision": "44768a7677a6c461ee82bd392d20f2d8"
  },
  {
    "url": "blog/22/03/2020/datavizhub-guide/index.html",
    "revision": "54c2f74531786e54bc76e04970563a22"
  },
  {
    "url": "blog/24/06/2020/host-jupyter-notebook/index.html",
    "revision": "afb180212863dea471ad3e36b5e36d96"
  },
  {
    "url": "blog/26/08/2020/D3js-for-data-visualisation/index.html",
    "revision": "ab60b9848bb57ddda582f1fca71bdc80"
  },
  {
    "url": "blog/28/02/2020/Urban-Observatories-hackathon/index.html",
    "revision": "7b9369addc6bbb96d7509fd8955eb046"
  },
  {
    "url": "blog/30/09/2020/making-the-best-data-visualisations-in-excel/index.html",
    "revision": "930270f83ce507255868321d5c1dd9cd"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "f6d20178366471279181c8a23bd1d405"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "88747c3d061396b1b338147b298bef11"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "ea982565220c60acd158895478a98eba"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "e73f33ea82a73395b6ceb4d7495a1165"
  },
  {
    "url": "blog/index.html",
    "revision": "8fb8ac99064460f2764afb0b5698ccff"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "19958625d8ec6085de997d4e54edbcf1"
  },
  {
    "url": "blog/tag/best-practice/index.html",
    "revision": "a94857ff0af603cadf1b8c4555afbfa0"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "7eb5ffcf3695f34d34b813235189169f"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "42645ff8e7356971398555efb688c0c3"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "e5cc51a541ac66dece7e43f9de2dd25b"
  },
  {
    "url": "blog/tag/d-3-js/index.html",
    "revision": "3d8a0aca05c204f007fd17f3e3227e70"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "6becb7d8d742b7ff92b43ad750e81b54"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "69231910d0fa37d2ffd4f394174a4be4"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "dfe4973592382d04f442434d907d4b3a"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "b841a2dadff604feb0cc46944857fefc"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "ae580cfe17a22b85e8a14aee22014dfd"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "76d6a7604290338845750ba6480678ad"
  },
  {
    "url": "blog/tag/effectiveness/index.html",
    "revision": "3f1373ed0c2998b162b7de0846b6d71e"
  },
  {
    "url": "blog/tag/effects/index.html",
    "revision": "39f9ceebe015b12c066aec2407aaca9d"
  },
  {
    "url": "blog/tag/emotions/index.html",
    "revision": "d2c0406886bc37c3f69151b9f344f3fb"
  },
  {
    "url": "blog/tag/engaging-with-dataviz/index.html",
    "revision": "3d4aa061a625f1aeec265644ef874154"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "34da8461b1f17f720735999ef129dbf9"
  },
  {
    "url": "blog/tag/excel/index.html",
    "revision": "a074b52bac07c1fe89614cb6890ec875"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "94b3bc7617608f87cdf7660c031d88f2"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "bb1eb8147c8d9e69f690fe0d3e7e1526"
  },
  {
    "url": "blog/tag/html/index.html",
    "revision": "6e32fbb022cd98b41e61927c8289a89c"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "d4d8473381c54af631fa4f6908a9b846"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "2e4698ac2c835991ee6330187afac3b1"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "7c77c94f327386c74466a003470ef75c"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "aab38323ff42d6c4549cf8be8303fd06"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "57464e5f72ff3951edb65730ca0723ca"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "a76888f4b20eab2501475d8951620f02"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "73f45431040e16b0eb1896e39941f526"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "81d099a5dafb51383e09ca205a103388"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "9571bae2b17502c008885d915056afc6"
  },
  {
    "url": "blog/tag/r/index.html",
    "revision": "8130be194b4b3e0aa60c8ce6e95085da"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "3880b4786b5313b023091188db9d9336"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "2246026abeb4f8c956c39093d7ea4f9e"
  },
  {
    "url": "blog/tag/social-factors/index.html",
    "revision": "fe0f4604d8613d41c724f052ac2fef42"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "1be3f78c239657590adfc214abe60a0b"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "063c74ffead2e4a3e95bedd824c59344"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "64cc594ad0669967d5b2123ec4d53272"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "3573d3b1a3d2be83eae86c44f28db4f5"
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
    "url": "chunk-map.json",
    "revision": "a2d6797d06390784c146d29ed6664169"
  },
  {
    "url": "community/index.html",
    "revision": "9c0887f7ffd3e1f08b2573544d25ec88"
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
    "url": "component---src-pages-about-jsx-d4d7259138dc60276ed0.js"
  },
  {
    "url": "component---src-pages-about-jsx-d4d7259138dc60276ed0.js.map",
    "revision": "11e15bc9fc37b757bcb47becfeae8861"
  },
  {
    "url": "component---src-pages-accessibility-jsx-6b3c9ffe52bbf6cbe060.js"
  },
  {
    "url": "component---src-pages-accessibility-jsx-6b3c9ffe52bbf6cbe060.js.map",
    "revision": "1dc5c08b813ce82b91810073e1ff5aa0"
  },
  {
    "url": "component---src-pages-community-jsx-a135df40df9762a2aae3.js"
  },
  {
    "url": "component---src-pages-community-jsx-a135df40df9762a2aae3.js.map",
    "revision": "711d64f9a4fd4209b770dc155cb08f69"
  },
  {
    "url": "component---src-pages-events-jsx-dd828b145e82f52c50cd.js"
  },
  {
    "url": "component---src-pages-events-jsx-dd828b145e82f52c50cd.js.map",
    "revision": "c9c0a4ed2f2b968b70fe53d4ed35db94"
  },
  {
    "url": "component---src-pages-index-jsx-e0ff781272fa420be660.js"
  },
  {
    "url": "component---src-pages-index-jsx-e0ff781272fa420be660.js.map",
    "revision": "b5603e32cc4dc2dd24876eefbf1c2f36"
  },
  {
    "url": "component---src-pages-privacy-jsx-9bda0c1ffef58902c5fc.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-9bda0c1ffef58902c5fc.js.map",
    "revision": "4a03fd742a5fcdcc146037a08b60b24e"
  },
  {
    "url": "component---src-pages-search-jsx-da6996666f3a55504c8d.js"
  },
  {
    "url": "component---src-pages-search-jsx-da6996666f3a55504c8d.js.map",
    "revision": "d81e68fa1a954d520d7cd37092fbdc87"
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
    "url": "component---src-templates-blog-blog-post-template-jsx-127f305e112f0fac3bd1.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-127f305e112f0fac3bd1.js.map",
    "revision": "2867aeecc698486e7e39cdacdad44026"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-58b84135b4d952e78770.js"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-58b84135b4d952e78770.js.map",
    "revision": "2e72b6542351611758ff436bd96bb10c"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-3fc058818aca8bda24cf.js"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-3fc058818aca8bda24cf.js.map",
    "revision": "c91f472417c354d894c2c65b99de9cbd"
  },
  {
    "url": "d208a25a86562dd71c41ba95f7546627/ggplotBlank.png",
    "revision": "d208a25a86562dd71c41ba95f7546627"
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
    "url": "eaab34a1458b2da67ef77c42d4aa54b8/Script.r",
    "revision": "eaab34a1458b2da67ef77c42d4aa54b8"
  },
  {
    "url": "events/index.html",
    "revision": "02bb2e833d5182f0e459c9d427a48c25"
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
    "url": "fdb1e2f7472aa185ca0212ced955456e/Sheffield_Hackathon_Map_Output.png",
    "revision": "fdb1e2f7472aa185ca0212ced955456e"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "7fffbe1c35faf6b481707e97f97f4ec2"
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
    "revision": "d1da3c600ab49dc9e481df7e65d6af66"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d0b5c4f27de19af677b8e979a75d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "40deda0f1c47c881ff0990ce5c0d794a"
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
    "revision": "c6820b479dccd1ca7d89eb250d1c8241"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/page-data.json",
    "revision": "81a5f416b829b1256261238bcb870d89"
  },
  {
    "url": "page-data/blog/01/10/2020/moving-from-excel-to-r/page-data.json",
    "revision": "0ec3a38cdaf61d5328e3b4571a74a9be"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz-stats-1/page-data.json",
    "revision": "323a90061b2f1fd5a2894b6250d35814"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy-Your-Dash-App/page-data.json",
    "revision": "89733feabf2eef040553ea5ea80dceed"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath-Introduction/page-data.json",
    "revision": "c493c80829c2ef985b972bcdfc7f2b54"
  },
  {
    "url": "page-data/blog/04/06/2020/dash-tutorial/page-data.json",
    "revision": "ef25fde52f0008301ae364eedb52b21e"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath-Lab/page-data.json",
    "revision": "058c8cacd0ba82045b768e24670d984b"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath-Workflow/page-data.json",
    "revision": "dc384c64cc075c33cd00739281b902e4"
  },
  {
    "url": "page-data/blog/05/09/2020/challenges_in_visualising_data/page-data.json",
    "revision": "4df5d2af03ffb4ffc8c889f84a6b9e4b"
  },
  {
    "url": "page-data/blog/06/04/2020/chart-choice/page-data.json",
    "revision": "bd5e4b5720a23666dcd62ba35801e5dc"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour-Schemes/page-data.json",
    "revision": "195ae9ae3e94ca304cdc5dce0cdbb5d7"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz-stats-2/page-data.json",
    "revision": "3c07fa7cacd687fb65f6725b1cb651d6"
  },
  {
    "url": "page-data/blog/09/09/2020/data_visualizations_social_role/page-data.json",
    "revision": "a8758b9e5b1631f47ffcee5b9c13589d"
  },
  {
    "url": "page-data/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/page-data.json",
    "revision": "3fd05c6dc8ad42cd2f0c9a77bf40fac1"
  },
  {
    "url": "page-data/blog/12/06/2020/dash-tutorial-2/page-data.json",
    "revision": "b019f999cf453e20a0e5a33779265e26"
  },
  {
    "url": "page-data/blog/13/07/2020/Shiny-Template/page-data.json",
    "revision": "e79203cb4033f8dae6dcb41d5be540ea"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter-Widgets/page-data.json",
    "revision": "74172bff079332b84b97a9f42b067942"
  },
  {
    "url": "page-data/blog/16/07/2020/python-visualisation-templates/page-data.json",
    "revision": "1b4c1c4f5f67aa6836ce8f723b383936"
  },
  {
    "url": "page-data/blog/18/08/2020/GM/page-data.json",
    "revision": "2b04a41469f97232b039414b42064077"
  },
  {
    "url": "page-data/blog/20/05/2020/Non-Numeric/page-data.json",
    "revision": "9137ebb6d3e11dcf7f377fda6f2d920d"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute-blog-post/page-data.json",
    "revision": "d8612729eec80efcc87c917fe0e645ad"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub-guide/page-data.json",
    "revision": "885602637dbfa12cdebb89c308fc78f8"
  },
  {
    "url": "page-data/blog/24/06/2020/host-jupyter-notebook/page-data.json",
    "revision": "f7c574a81cc81d3f3320c54f4fb7e69a"
  },
  {
    "url": "page-data/blog/26/08/2020/D3js-for-data-visualisation/page-data.json",
    "revision": "46604b592f471072d4210305516c99ad"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban-Observatories-hackathon/page-data.json",
    "revision": "7ab21a0b19eec381d9a5a026d19150fb"
  },
  {
    "url": "page-data/blog/30/09/2020/making-the-best-data-visualisations-in-excel/page-data.json",
    "revision": "d7cffb6e4fedb8c6fa47cfdaaa63293f"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "33ef504ba8734beb0c3095f29b226bd5"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "a13d48ebce92178ce039518e5ec3b043"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "bd76f71814e9225f8df4c27ff0a4c8b2"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "002a5eaae56af0b7a22a1a3d3a6282b0"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "7958fee56f3f8f1e9a4362d5a2cfb783"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "20857befaae46e77cb6c6fca72bac49e"
  },
  {
    "url": "page-data/blog/tag/best-practice/page-data.json",
    "revision": "4d03e9897241f7e0a25c353796df1988"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "0d1be0bbb23cf59d5dec93f5e1a75696"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "16196ba6e9e35333fa4878eafcdcb587"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "8dc29164fe1973fbc1ea7e3730339660"
  },
  {
    "url": "page-data/blog/tag/d-3-js/page-data.json",
    "revision": "03c34d1a9e1b3ecd3d732beb0b451536"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "dcde462750df06810ae9cbc0c631b6c9"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "ea624db45aa71bb7cd82b1df963758bc"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "f9935a4806346d445b421d17867f3295"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "a592e4533ca1738b1a3cd81c89bd5f6a"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "78bac0bc6341b2cac7fe77f68f7c358a"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "e7d5f900624020e8229682a127090511"
  },
  {
    "url": "page-data/blog/tag/effectiveness/page-data.json",
    "revision": "4562ecbbb73c1e5c987ede2c31a85c3a"
  },
  {
    "url": "page-data/blog/tag/effects/page-data.json",
    "revision": "74c18ca55d389f3fac1a1de7a46c5a49"
  },
  {
    "url": "page-data/blog/tag/emotions/page-data.json",
    "revision": "bec2481a338169efa7d5d8df5ca5af96"
  },
  {
    "url": "page-data/blog/tag/engaging-with-dataviz/page-data.json",
    "revision": "cd4507f9666b10142691a9ad988efc3d"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "73f4c698bc2f69a207f6982d96341657"
  },
  {
    "url": "page-data/blog/tag/excel/page-data.json",
    "revision": "d3fcd5155bb50b8d2b1bcdfa8645d560"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "6ab40dc4cee2a723df0269498c3154fb"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "ce33b4851a6a66ae07d146d1f0250eeb"
  },
  {
    "url": "page-data/blog/tag/html/page-data.json",
    "revision": "020f4751a1f1aa28ce3ed8cc79970e97"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "f0b742777b456bc803244eb4fa82d021"
  },
  {
    "url": "page-data/blog/tag/javascript/page-data.json",
    "revision": "1803f800dad5acf1c9c3ada195fa837e"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "4241e893671d587764310b0db468fd1b"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "65c2f630f8bfe2a7a626b77bcd6d7099"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "4797783b266a8bf7910eea06dd1f12f8"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "04f8ef3d1d2e06f0b9ae62c7bd7bec3c"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "ccaec1c39f1cf42cc42a1d3b381a6b01"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "dc5a5eb46a681915bc526f83b307bd4c"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "d1bd59836a0e46d22fe9d698c8dab474"
  },
  {
    "url": "page-data/blog/tag/r/page-data.json",
    "revision": "02856052427b9c75fdc9e5f4c869edee"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "a02cc8a2041f87b3a1a9e44754738b08"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "c1becfdae8c41da1a5c3811273865a72"
  },
  {
    "url": "page-data/blog/tag/social-factors/page-data.json",
    "revision": "7bfc9c6a278128c801a98a1191d17a25"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "6fbbf153a5b5cdbaa5c5050dae0d23f0"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "2daa75ce32a86c73eab41530309a8a76"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "a31275b634fa0633ac649870bd38a26c"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "71d9d521a9d4d039e7d32bdc8432eb22"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "c224ca504da549d4dcebb75e51bb766c"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "ef791d3c63627cd5f643c04277ea30af"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "84fbd545b1b5a5e6e5737d56f3c3bbd2"
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
    "revision": "ecda2bda56990fb2e11a8fd1b227f4b1"
  },
  {
    "url": "page-data/sq/d/3370916995.json",
    "revision": "34c602c0c707979d2253ef707aaf7070"
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
    "revision": "9b684c25aa9d247093f125d1eb689a2c"
  },
  {
    "url": "search/index.html",
    "revision": "808d74c218b5319d025a3d54947e5217"
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
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/497c6/thumb.png"
  },
  {
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/69585/thumb.png"
  },
  {
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/db955/thumb.png"
  },
  {
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/ee604/thumb.png"
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
    "url": "static/com_1-a0e4c0689c63024715127c5e741bd8a6.jpg"
  },
  {
    "url": "static/com_2-e649ff42b2d4ee96bdbc1606d1308a65.jpg"
  },
  {
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/2244e/jez_c.jpg"
  },
  {
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/f836f/jez_c.jpg"
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
    "url": "styles.6863e37e9c6b0dfc4a08.css"
  },
  {
    "url": "webpack-runtime-959af7ec9437832687ac.js"
  },
  {
    "url": "webpack-runtime-959af7ec9437832687ac.js.map",
    "revision": "dfa91c2bba8e981e677ea33ecdbdfeaf"
  },
  {
    "url": "webpack.stats.json",
    "revision": "d3580ff716a897977e495bbcf33ee838"
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
  if (!resources || !(await caches.match(`/app-56b6f033b7df1922abd5.js`))) {
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
