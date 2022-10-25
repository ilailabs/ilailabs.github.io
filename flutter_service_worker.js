'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5026c38edd0342e56c5720c48f895ed7",
"index.html": "753bbca1838ead3a27721f0c9b0fdec6",
"/": "753bbca1838ead3a27721f0c9b0fdec6",
"main.dart.js": "2fa16116c365bac1fd2f38b4dd42ed6a",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "dc1bcece73dedab8467fc1a6e272ec35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "494f760a69a36a53df565cb598294750",
".git/ORIG_HEAD": "3cedea8214c03b791fa977fcc48d6a69",
".git/config": "78cf44220012b92d472bd0a9428ebe4c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/3c95775a8a357a11eee34cf79dff98e74a452b": "41823598eee671ef3eee08bc24f5bdbc",
".git/objects/92/520f895178afc30e0e8d707a24e88e869b7580": "68b511c0deef803dabc87d596076b3d6",
".git/objects/66/1d1bf592fc25c98c29d2ae6b2d91253a46ca50": "bf90c05209ed4deef5ecf30b6c56a327",
".git/objects/66/27cc90a31fac49d79f397b39ec8f24e901220b": "8e8bcac2567f61a1fb3543195950b5cb",
".git/objects/3e/ad145f9881a91d144629a09874ef55c362fc29": "6897c0f44d3fec2a95cec19fc79624b8",
".git/objects/3e/a5b050a347e772c6705fe161917f8a36867c17": "e3537abcb982c83c4b4187333ccde83e",
".git/objects/68/7dd6460bf54648502563b5ec36f7259f6348b6": "e5f4589d7939414cec7fdcd175a697a1",
".git/objects/57/a5a683b3f0024ceb98f272b45021603616ff71": "85fed3e7231ce8494edf511aabb5bb1b",
".git/objects/6f/01d647fc00ce19a6c9ac52a385ff3a6b68c109": "05547f44194535a9e60e48b6afa156c5",
".git/objects/6f/44fe4e56ca34304d0a218acb8b7ff404accb49": "1963ce9e4c451db7e44fc6155f88bad2",
".git/objects/9b/8d8ed186dfbc1d17d1e2735b0d8ead088a71ef": "fbd3a3e708d7ea4442230c25fd8f128a",
".git/objects/9b/1e1a4ad7ce1da1bd415df983e13e44093e13e3": "1cea77a7c0db6d08ed5a9e7469b70638",
".git/objects/69/a1f1574f87b810dc15be37ff617c786b450205": "574e5883575b8b2ab421fe0255b6a320",
".git/objects/56/a65a9295afc82049d2d3190abbfc472d658ad7": "0c3ae8b0c1271d51c04a5022e38c62a6",
".git/objects/51/b8899dd5a3db2ddb7e6b1959778bb0ddb4a748": "c3c4edb16ebf6a9f3f0231f30a3089af",
".git/objects/51/7f6e290a2e1fa628ebdbd0d47d8c92c89e7200": "d28f9630fbe102f9891a578e5a68c7e0",
".git/objects/58/6005c5152a51db6db2f55843128d05a791dc74": "fb635bbfbfea9cb07cad8c20db659089",
".git/objects/67/ac1dd40c448e60da8e4432dc5a1bedd0128eb0": "4c78568188d1cf4a5f08ffd5678d50ad",
".git/objects/0b/7fa588ad8023f5b08a73a41570646f9356c674": "7d56e592b119d7162cc1c889ed5c480a",
".git/objects/0b/a7d1948521f0dec0eb86f0baa7668ee93910a6": "2beb16ec66d83fed53d2d23789a676d7",
".git/objects/93/cf2350981becd39fff215b4b74d08f2f696e78": "2117194a410f6112f254a97283fe8919",
".git/objects/0e/c221996683fb1820d5515172f71243731d0e2b": "aefc1f99946d3e7a44bbc1ce951e1ba9",
".git/objects/60/39164546330b95819a1f6022797d3f330811dd": "f7365c5a447e88cd51d5d599ea5bf107",
".git/objects/34/c66c2b431272aa6767aecdc203a7be06ee6202": "445e459024aa7a76939e3761dd36e740",
".git/objects/5a/59a4e870c1bcc0bd5b07feeeb9238edb48f90a": "987ffb0c524d50ae7f044be121f92eff",
".git/objects/5f/f50f7f346e50ac6057ebc4ac2068a8d350cf01": "74666d860180c6a29440c842dd0d94dd",
".git/objects/05/387bac6dd21f3cfa617369e05fe4af0eb002f9": "c1de55f73677e3e5f9c909551d5b3dd3",
".git/objects/05/59d39624aae824ac4a198d9d426da72f8fd411": "2a1b25b2fcaaedc09a5a82e0c342c7da",
".git/objects/9d/aa0ec1587b2dcdff359020bb7e96b335314da1": "b4eae36f528784b2775813ef06e04cf8",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a3/f3df590dee24e26e67f19f7812cf660203fc02": "4cc07e5e14530160b5302e5da69483a5",
".git/objects/b5/787cee205c7a4e243a982bb1392922031f6595": "15b9c82a3957af79adf15bb12e29a6bd",
".git/objects/b5/febe5ccf612676218d05d01c662f560b3783ca": "13e1b68106106f418934d5e92b2e805e",
".git/objects/b2/2c60dc05189c9d55ba1397cd5b1ea60ff799a1": "74754a0b229b9cba70d870fc3726106a",
".git/objects/d9/b72f816ed0d5e02c67aa947a42e6f304f622ff": "c5a3aa36dbac6dd71bd24e5c8e768a24",
".git/objects/b3/496d189c855d249e162faaef1b30860b088528": "da4889147a4b056e31f628586667f9a8",
".git/objects/b3/621fecd3d616ee12d2171ae8f2a0a906b198b4": "72ace1deb359003ff76fe8bee00c7281",
".git/objects/b3/175ebe02eb3fd3aaa3951316b677f4d4601360": "645d5535f37a74661f18756ad39a36c8",
".git/objects/b4/d1598557a89b5d1d177a40766b0e3b58aac3da": "e7c28cc161f3f6099c05be0bddb5bc06",
".git/objects/b4/de84d08c4bc6098dd47c0adfd227a30f122e80": "a20ab253d1b6630c6f5a170d2957f4ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/2544aa133631137e3268ad4a86ce94c4288d9a": "2762b4569f43d0037eb0f8f6db6d2af9",
".git/objects/ae/2704734c079ee5dc6b1be703a4b9cb5d84dcd4": "68c1b1823590e011d0280eda4934f2cd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/88ded575a177a4211578f234a42c37e7dc54fd": "48d71b37ccc411a28125fcf2b1a7a078",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f447a22e6d5d2789c378c355e24a6826004e27": "4b55c3be5aeacf7aee1565866131e8cf",
".git/objects/e2/26ee5c260a806daea333430e87163b9585015a": "b06e0ed358a743aca4d9040d51c17c38",
".git/objects/f3/084c9a7149ba060bf6e7664e95a72b07e26767": "15eb79ec9a0725b469e964eac2ca8c7d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/56285bedcf1cb3f97e06a3da88ef65543df0bb": "aefcae19011cdc048c73c8715b87bfc5",
".git/objects/c0/ea1bca188587aeb8b7df7446c743f241feb864": "32c0dc176a80a2e28560c8ebb3f6cc5f",
".git/objects/fd/5e9fc78d16e0f7b0a15ea128fb219b60061288": "55989fd321f7cb69f4671211c3adbd1a",
".git/objects/f2/0c69c80bf56eebef02c5cf8ecfd120ed012e70": "03ae759550f47fb9cc65624f8e5619a5",
".git/objects/f2/aee04c033d6bc98c8a78d6d36e037533c1116e": "bef1f0685e4a712b514b9ee6bafdc542",
".git/objects/f2/3376ff42a6971ba8a148c6092f9d9cdc088f12": "31363165af30925163c6571cd1c99605",
".git/objects/f2/7275bdb47bd7bdf45b3673441cc2c49de55ee5": "8bfaea24d01730a1911def7c4b606085",
".git/objects/f2/7651ce8ec4618fbc838c695af3b2739fdefc12": "0f1cd6a94ef1fcf9474a42ab1909f76d",
".git/objects/fe/bfcf8d0ad1be753034f5a5603c0cd77295f3b6": "68e8f4dd340a9237c629fef006dfa702",
".git/objects/fe/948453f8724df1c017344387a6ec31a9eb267b": "e6f97bbe1f25fa08468453a22a5468b9",
".git/objects/fe/ebd59834d24defb7eb75e4d124cf8a444c382e": "dbe5f2ace4ed1139bf09b969ee2b31d7",
".git/objects/c8/a4b104b5618e69d95df74249b351135b986289": "71daa25b4dae4bb343e851e270d5fac7",
".git/objects/c6/bd509859147e70e1578237cbc34e09dd3999c3": "4c3032f780f5ec4d144c0ac3914e4e6f",
".git/objects/ec/740234428d55acf1589ebc5c47d4069849ab46": "ac9fda53573b8d1eeb241232e89db59f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/f52d6e502bc93c77deaddc3c158e5d7b33c90a": "365f97e30a1f860d57fa34354ef2466e",
".git/objects/20/d4f480eb010713a464f85b398571571d39df0c": "35d9a9563265287e87fef57a6d36c6e0",
".git/objects/20/ed8aa808b0ce229294bf8f8c61838b5cbeb8e9": "ff1e2cc81f891ef7ae98c971ac4f128e",
".git/objects/27/192588a4860cfb99e3a7bbc2d9cfbb747576d6": "827d05f581465b30d0cd62621e99d817",
".git/objects/pack/pack-2fa5e050e1d8de925fbd42dfda80c7647a2106c7.idx": "761cc8986d48c9d8fdb99481f9c4aa3f",
".git/objects/pack/pack-2fa5e050e1d8de925fbd42dfda80c7647a2106c7.pack": "120ac66a33ff27578b09509a5ffaca7b",
".git/objects/16/d846bc477eba06ae0d911bdb397bcd8ed3939c": "055212060b32f33aa928658194bcf370",
".git/objects/16/05d631d2104ddc615d2cf43a3648c7cd71ac8b": "b7071324272969cd8c19348095d18718",
".git/objects/42/00475b5228c8e9939b84b99a56d27d110c2a99": "527fbb884878bfc12d85a4dbda9b3a56",
".git/objects/89/27907a285c72c1380b10997a91f4c1f61fe520": "ddacc8b49b8feed827188cedf34da922",
".git/objects/74/a453b0e123deda36fd6425c42e5033c2d912c3": "41052bb940adef9c49746a010eb687ac",
".git/objects/1a/1b736993e8c4bb7c85e5076b090d2f4d69484e": "7bdf50909d27598e16ab2a33ffaecf5e",
".git/objects/17/a910d7289625bff7670aa6be5b9a80d7899e40": "9e211a67dd5a1c8e68bdcf008f7cf2f1",
".git/objects/17/8625147de16c408310715d54dd0a5c3e6556f7": "9b552222a170301a8c288426b6b4e475",
".git/objects/17/b971e181bcf6a9ba502a6bca03e8339d8aeac5": "352abbd785c7302ffbcb0da3322e10c8",
".git/objects/8f/5b5180585d488fbf0b2d034492e7330e1e2330": "65c2d4ebc8c0ca1806af7021447dc73a",
".git/objects/7e/4d0e953717b744a35bf9d49a9eff861fdfd0f6": "a8964eb8096e987f1c03d8d7dcaebe55",
".git/objects/7e/a1d153f3cb4eb47ea01f3b35471a1d9032ca14": "27e6d216f732b48800861ab85f8b4e45",
".git/objects/4c/b608033b75551015afd7fa3c30170bd059416e": "e21e3e09f37c1b3daba311c5e7709c7d",
".git/objects/26/b9b6aedfc9a2aad0e1884d179d4f993ca09941": "d635866e40912258414f59af1f80f1fe",
".git/objects/26/908a8c809276589414256a3478f2e69f9f695b": "1824d8eb714c5d48b471002d856d1bdf",
".git/objects/86/7e1c6b3612679885ae65c3dc50075646878326": "7967e894273244f69e4e621bf29fd673",
".git/objects/2a/bf96740b9f7de8db8d0044ebe98b22d0b7368b": "41b0ada93ba353dc5c5f5c8c316c5f60",
".git/objects/2f/99ecfc958b7891708c627c93fdde66284ed94f": "4b8852bb104706ff667cbc1c15f40941",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/aae910d2879f02a31a7e9033a8ff071160bd93": "ae014822301f06cad318b95060d20a0f",
".git/objects/00/f1037e71720de7f103ec0c58dfd2e60519462d": "129113d6aea5bfe8cbd584fb31b81841",
".git/objects/6e/b138a33179b6283128dddd2fd9e6dbd1d35b27": "32b7fe4568b9ea5642a04d9b64722f75",
".git/objects/36/4fd5eeb13449cec0cb3477bbaa13413ac47a7f": "7a3669d9e64e54b09a0b2fc258816da9",
".git/objects/31/7155bed453b60c48b8a5c60f7a14a8c56d32bc": "b3ddf011814ea7927b021463aa205014",
".git/objects/31/e1417424d578a87a327efe4ff231e38163c1d4": "0d25671ea86194a5d1f6bbc4ed874661",
".git/objects/65/aec9413857960d870c3ee461933f7a91eb2638": "d169e7ec50321d1dca2763f3b20ec462",
".git/objects/96/53e1eeecb223e337c35c1f7236fd90e566a29e": "4b129d939d86ea30fe4b496526320e9b",
".git/objects/96/4e8d5ab66dc0ade81b1bbce979f340f03a10df": "ff783173343034f8835eeaf8317c49be",
".git/objects/54/7ef19c744e5660d36c7b48e632c42a5242ae03": "4962f01a0276d2d481e70f4a70e0f9cd",
".git/objects/53/aaf122a03317393bb9787d4a54f78961f2aca6": "d30e36989ed7ca3e82efd476d1abc1df",
".git/objects/30/2cba2905d38dbc245e6899579a4c94d40cb906": "d9df1ce06d534cda2a2fdc79e1bd1deb",
".git/objects/30/61752b184917814b0f2a135cc6945014f5583c": "b6dbf9b2583cc5e7a5fe3fe2e5babd10",
".git/objects/63/e6643f9adaa82303f6f66b7d6eaea766a466bd": "a856f046ac2545ad4b8b4713d0bfb5b4",
".git/objects/63/6b2d7d1786e757b4c0e9bf212e6316a7702549": "4fdf479e0a4025efc800a69f53bb5851",
".git/objects/d4/4dff37a117e592df8882adb5ed74a8efa61a75": "5adeed075d9d79e488b71e936b052815",
".git/objects/ba/0b284736d8f41eb2280a5708f4765687803588": "153f2b51314bfcd951ef4408be2dfc65",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/b8/31ba14d235cd739559f2f4dd93ec539bf0ac06": "83f30431cafbbce07df23a31ca1e5ffe",
".git/objects/b8/57210d01c0449b5eee699976293e0729937a86": "182030c32c3d42d8efa8dce26f48bf6c",
".git/objects/b8/a994d9bf9c44f346d1856085c456b7cda9c31c": "0d8a0a4b2043162f5614465493e0f6c9",
".git/objects/b6/fefa3696fb7f5b4e65b616231dbdea99932e5d": "26629a5e84a550b1c91439e0b8cae30f",
".git/objects/a9/b8a51d69405395bbf9c7a461e966e4b1c0f2a6": "58f6486fcd8326194ec864709593426d",
".git/objects/d5/669a9fe327b13175a15cb61c053bd47385d6ef": "5734c9c8b1804cd3bf603dded5e3dd83",
".git/objects/d5/8b8e8fc037fd66ebbbf7acf2f5992814411219": "7dbf9525464ac2bb2a830934684811a9",
".git/objects/d2/30ddcb3ec3b9f911914c2c1da4235ca81dd2c4": "7c748ab86e11d4f3358e654ff3c2bfa4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7f6789b66850aa1d3dc4ee1911509e4bfbc7c7": "1ba52d07f091d3de27bda4cdec98a053",
".git/objects/de/af1330087a6090b69b7dedd98a1510756c4e2e": "452c963cdd9ef5fc8694e11ac7dd396b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/62950c2579da9470898c54863ea376629cb515": "78193e71b87edf0a7f322b7ca6f191e3",
".git/objects/b0/90d164b474079f83620aa0e269110e141e18e9": "ce7e6cc9897073bb09befba2df92325b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/f119b49e7ab1aa6f2fb92f919f62d8cdd2aa93": "1437e693e6f339630d60a74d50bacf90",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/3fe1a11a78c790495fee7d2a4dee87e4261c59": "9cbf30f31ae6bd92ff16ebffb9ba149f",
".git/objects/c3/b3b2bf3215d112c41b12313f05098d281c11c7": "5e05b321425f3823009fc53a30e99c91",
".git/objects/c4/c6c56721e5ad031aa6bd92cf412c1414f69fd8": "146e0be355c421f0da9d67820c64db38",
".git/objects/ea/766a3a7d1e10bdfedce85536f420d8606fff1e": "064da77fee0b9639aa398b4b0a5c2d1d",
".git/objects/e1/a9d607b5ad119e360e759f408f972c924e4139": "c49b53e4208c1b224e739410b9489fd7",
".git/objects/cd/2899437cdd044b6214ab12f99b52901439007b": "a3239855577b9ff73ed106859c04bf54",
".git/objects/cc/81280658163d2e8e25182936fa835ede40c7a9": "141b02160e3646d0672a2aa0a357d555",
".git/objects/cc/313f9f70be19882ea971877f2caa4ae01e5feb": "8a6391f33ab4061b6e5f4bf6e98d1f78",
".git/objects/f0/368ec641bafb0370c932c69aab92b95c795f7a": "0b2a7e7253332788fce054937fa01451",
".git/objects/ff/4969966ad83f1263e7947f7e2e2f0b7c1c7459": "6aec66a60a3603e5fb8e0021461ba74c",
".git/objects/f6/78e7575b7317e460c0f57d44a63038582148ea": "cdeffffb1683f169c531b790df891f2f",
".git/objects/f6/550ee95973159cc94f2efaf89c7bdae328e5d4": "340eacf84f408ab5df658c9e581f1b33",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f8/44e7ad425d1586778fd16727f911a3531e0078": "01c1cacfc904c261f4ce93a6941aac80",
".git/objects/ce/4e550ffea6584f3ce4ac4855cbe4c6f27b1fce": "f9ec4a21a4aff840d7973a13386b33bb",
".git/objects/2c/3ca1eaf66d22708388947611a2525f1743e65c": "b5e1800ce4ab30edd46245e9ba7b3b05",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/565b0ca20ed7ad912ac20b38400c89e707583c": "6cae08210374ddd79f501e370d9053c9",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/25eace2126f8fb349f962afba9e9185f7fed4e": "5671bfb39e596dbff0a3f2995f5c250c",
".git/objects/2d/0cb45f6840febc8d771340218fe2f32e29dcd1": "fafaa3cb4be62e5a050b08cb0047ca07",
".git/objects/41/f6114dce03c7cfb5530d9d2286289bfdce00e8": "a2b06a30839e66e42a4e384dfb5dfd40",
".git/objects/77/6205507d8f5f354c64f4180418772204df0a59": "1baa4756fc734ef25bd2bb2aa7fc7ecc",
".git/objects/84/1e61e5819d15250235260678ab5203851ed9ea": "a304b27df5769e1226f0980e03e052b7",
".git/objects/4a/75f0edda0b3dc7c501525bd1c0f7f04137982d": "d7060f271764b2b0492ee640dd3dcb8e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/e779172be18549af1a1f404f6b705b102ec9a9": "56b041f16190be0ded368cf212ac86fd",
".git/objects/4f/9b73da0fc5d5330c5036bc7185806202b9dee3": "9aa84897ebdc0cd1d1ac6c3acc98685e",
".git/objects/76/569642f35ab2ca1d971ba44e2f713eb6be6ca7": "f571226d530730e769696b87176ac60d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/ba16a462d84a9552c619d475ff3e3eada6906c": "0b2d44fa69e21de04c3525cdfd97ac0f",
".git/objects/7f/b4559b0f472348db69f77e99ec3c7257c4dcea": "bdd30988199ee1e99853d3e967b92ec4",
".git/objects/7f/63f94971f3acdeea393e3528e6b683ee6f5ea8": "ea93747e4d6fe1e335772b5fcb33d2a3",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b205d4ee89c952c8dab467b309c25bc",
".git/logs/refs/heads/main": "7b205d4ee89c952c8dab467b309c25bc",
".git/logs/refs/remotes/origin/HEAD": "c33ab1d784f95f6f059b43f1a6cb57da",
".git/logs/refs/remotes/origin/main": "8a300ef4243dabe69989de2e5b7bb6c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "05c30b2d57d097a6868b55658aea9111",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "05c30b2d57d097a6868b55658aea9111",
".git/index": "581ba35d03ec4325524672450f50153a",
".git/packed-refs": "f95a8fc70b39406f3fdb9fa736b6f72f",
".git/COMMIT_EDITMSG": "e035ad559fe5432ab13f14e4c9067eeb",
".git/FETCH_HEAD": "8f364b5e4ea3f79bdede8c21fe41b7f3",
"assets/elankovanmg_resume.pdf": "82fba51afd2700e1000fb1c7bcf0e99c",
"assets/asset/amepos/01.png": "a3eea498984b112155398f1cf106890c",
"assets/asset/amepos/02.png": "09689bdd080f4d5dda7f854458cf9fee",
"assets/asset/amepos/amepos-logo.png": "0996fc4cdc28ad85793081f88b2fa8d5",
"assets/asset/amepos/about.md": "9a5a0c57186b03a990c7d4e86519ac65",
"assets/asset/project.json": "cedac9ef0df17a43e9cf7d67f1c7d00c",
"assets/asset/amepos-admin/01.png": "c609981608ed3f7622b7d5a30275d153",
"assets/asset/amepos-admin/03.png": "60aa0af3ea19ae36485b3eaecf6bd472",
"assets/asset/amepos-admin/02.png": "dcdfa8193b71374b154dba6d308abe74",
"assets/asset/amepos-admin/about.md": "40e2ae11a528f7bdd795179e347bf39e",
"assets/asset/my-profile-pic.png": "05b8f0badbb65f9282a59efd6ab3faa4",
"assets/asset/exchange-rates-web/exchange-rates-web.md": "6664e86f507664916483897d2a6efc23",
"assets/asset/exchange-rates-web/exchange-rates-logo.png": "42317d00449d2adf1b52a6d21d437a4a",
"assets/asset/exchange-rates-web/01.jpg": "e897a1997a5cd77e1f374d43eadb6400",
"assets/asset/exchange-rates-web/02.jpg": "e008074641870ca6dd0b852039577f79",
"assets/asset/exchange-rates-ipad/exchange-rates-logo.png": "42317d00449d2adf1b52a6d21d437a4a",
"assets/asset/exchange-rates-ipad/01.png": "8b27765d86fe4c4f4ea1045fbf2d0db7",
"assets/asset/exchange-rates-ipad/03.png": "040530ae7d8afeb5248debc63b7714a1",
"assets/asset/exchange-rates-ipad/02.png": "42473cf7ce88d46637c179f6b4d1714a",
"assets/asset/exchange-rates-ipad/exchange-rates-ipad.md": "a8cbe01db9ae0a49179850ac3a275e4f",
"assets/asset/ame-wallet-description.md": "88657e6b0ec549e60bce701d9796318d",
"assets/asset/ozone-wallet/ozone-logo.png": "db16ab81b46d3eebb3fedef2d869327b",
"assets/asset/ozone-wallet/01.png": "5cf4454d257b8bc9612098c3685bf2c8",
"assets/asset/ozone-wallet/03.png": "5395b22a21d41be3cd372ccdd3e8b0c9",
"assets/asset/ozone-wallet/02.png": "7be8dc83f2ab52a8744e41096d1baeda",
"assets/asset/ozone-wallet/06.png": "18f53a5e9f14fed4825a98baa6720274",
"assets/asset/ozone-wallet/05.png": "cd4d9eff96515d6d593408e83a38fc8e",
"assets/asset/ozone-wallet/ozone-wallet.md": "420e381b0cc19798460f36cb05dcbcea",
"assets/asset/ozone-wallet/04.png": "d35502f4e0c830466e19d10167c274c9",
"assets/asset/ozone-wallet/ozone-wallet.json": "fdf713cbeb06088346618aa45b1cb92e",
"assets/asset/app-store.png": "63767a5231420997ccd16d6872dc26e7",
"assets/asset/gb-generator/01.png": "a1d0ff6f1f89b1058bfc730f691d4dd0",
"assets/asset/gb-generator/03.png": "f1574c53af865ebe6cd4fb6ad6eb3910",
"assets/asset/gb-generator/02.png": "fc322251372a45a2a60a740bc6259998",
"assets/asset/gb-generator/python-logo.png": "fdd714ea33edab1a36da0aa14b12ef96",
"assets/asset/gb-generator/about.md": "155407b3ed576c2f74b37edbba3ab1ed",
"assets/asset/test-ame-wallet.json": "56812b7493d23efb1aee3bc41d570e72",
"assets/asset/project-ame-wallet.png": "cedde711796a55a11378df7a9042d5bf",
"assets/asset/play-store.png": "6ed8424f5a50f452e6c19a48a65fc160",
"assets/asset/ame-wallet/01.png": "87837916ad6e527cfb17f09a7d5ccf52",
"assets/asset/ame-wallet/03.png": "52bc3423e6f5e0b9ecef43d67bf4ac35",
"assets/asset/ame-wallet/02.png": "a930a4f9b5b7a2729d1c5b0640b3ff85",
"assets/asset/ame-wallet/06.png": "8831ae8a25001cf89fc9e666c0bb612f",
"assets/asset/ame-wallet/12.png": "84d84e29c1e1993e90ddd4ef14487f15",
"assets/asset/ame-wallet/07.png": "19a80a2a5471b33bb28642d93a8a9e98",
"assets/asset/ame-wallet/11.png": "38b85cfe1ce9e45815440ebe05517452",
"assets/asset/ame-wallet/05.png": "dde4dbdb8915325b35261186bd3068b8",
"assets/asset/ame-wallet/04.png": "65783c9d8f597abb2b9e22935094f616",
"assets/asset/ame-wallet/10.png": "28a6ae2871ff48b77f697f0d4aa1e31a",
"assets/asset/ame-wallet/09.png": "47cb2f33a07a8b45726fb4cecf9b4b7b",
"assets/asset/ame-wallet/ame-wallet.json": "61e38d91b140356eb7d4423a19ae7929",
"assets/asset/ame-wallet/08.png": "32eaf850489e9a2b4b11c5ddd2b642fe",
"assets/AssetManifest.json": "d01a47183fdbfa5987c8b58aeea77de0",
"assets/NOTICES": "5da1b502606d617db4786c99366224bb",
"assets/FontManifest.json": "58d09a1ad43329c1a1b9654cb79cf0f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Quicksand-VariableFont.ttf": "aaaca85ea11863d1e4550d425f763bd1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
