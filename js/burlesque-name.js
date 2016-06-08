
function BurlesqueName() {

    if (!(this instanceof BurlesqueName)) {
        return new BurlesqueName();
    }

    this.rand = function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    this.alphaNoun = [
        "Arse-Shaker,Apparition,Amazer,Amazon,Apple-cheek,Acrobat,Astounder,Astonishment,Abundance,Allurement", // a
        "Bouncer,Butterfly,Beauty,Bombshell,Bubble,Bird,Bra-Buster,Belle,Bloom,Bemusement,Broad,Babe,Bedazzler", // b
        "Cutie,Candy,Comfort,Cheerleader,Contortionist,Confounder,Chick,Colleen", // c
        "Dream,Dancer,Drawer-Dropper,Dazzler,Dazer,Dame,Doll,Debaucher", // d
        "Explosion,Excitement,Ecdysiast,Elegance,Eye-Opener", // e
        "Fan Dancer,Flash,Friendly,Fidgeter,Fascination,Flirt", // f
        "Gesticulater,Gyrater,Gumdrop,Glamour Gal,Grinder,Good Time Gal", // g
        "Honey,Hustler,Hot Dog,Harlot", // h
        "Idol,Incredible,Immorality,Ingenue", // i
        "Jumper,Jiggler,Jaw-Dropper,Jell-O Mold,Juicy Fruit", // j
        "Knock-Out,Knocker", // k
        "Lovely,Lady,Lass", // l
        "Mover,Mistress,Manic,Mermaid,Marvel,Miracle,Mama,Miss", // m
        "Nuisance,Naughty,Nightie,Nightingale,Nymph,Nurse", // n
        "Outstander,Operator,Outfit-Opener", // o
        "Princess,Peach,Pretty,Perplexer,Peeler,Powerhouse", // p
        "Queen,Quiverer,Quick-Changer,Quickie", // q
        "Redhead,Rapture,Rocket,Redtail,Wriggler,Wrassler,Rotater,Rose", // r
        "Siren,Sin-sation,Shaker,Shortie,Sweetie,Stupefier,Stunner,Shocker,Shimmy,Showgirl,Surprise,Startler,Sensation,Stripteuse,Silk Stocking,Strawberry,She-Devil", // s
        "Tassel Tosser,Temptation,Terror,Titwillow,Twister,Trifle,Top-Twister,Twink,Traffic-Stopper,Temptress", // t
        "Undergarment Undoer,Unzipper", // u
        "Va-Va-Voom,Vacillator", // v
        "Wonder,Wiggler,Wobbler,Wagger,Waggler,Whiz,One-Woman Wonder,Wicked Woman", // w
        "Xtasy,Excellence,Exhibitionist", // x
        "Yo-Yo", // y
        "Zipper,Zipper-Puller,Zig-Zag" // z
    ];

    this.alphaAdj = [
        'Ample,Amazing,Atypical,Alluring,Attracting,Appealing,Angelic', // a
        'Bewitching,Bedazzling,Beautiful,Beguiling,Bawdy,Beckoning,Built,Busty', // b
        'Curvaceous,Comely,Captivating,Charming,Come-Hither,Curvy,Charismatic,Classy', // c
        'Delightful,Dazzling,Desirable,Drawing,Devilish,Dominating,Domineering,Delicate,Divine', // d
        'Effervescent,Enchanting,Engaging,Enthralling,Enticing,Endowed,Elegant,Entrancing,Exquisite,Excellent', // e
        'Fluid,Fabulous,Fascinating,Flirtatious,Full-Bosomed,Full-Figured,Flashy,Foxy,Fine', // f
        'Gracious,Glamorous,Glittering,Gorgeous,Good-Looking,Graceful,Grand', // g
        'Happy,Humorous,Huge,Healthy,Hearty', // h
        'Inviting,Irresistable,Indomitable,Ideal', // i
        'Joyous,Jutting,Jiggling', // j
        'Kittenish,Kinky,Kooky', // k
        'Lyrical,Luscious,Lascivious,Lively,Lovely,Luring,Lovable,Lusty', // l
        'Mysterious,Magical,Mountainous,Magnetic,Magnificent,Marvelous', // m
        'Naughty,Nasty,Needful,Nudie,Nifty,Nice', // n
        'Outrageous,Overpowering,Overwhelming', // o
        'Pretty,Pleasing,Pleasant,Provocative,Potent,Powerful,Plump,Prestigious,Petite', // p
        'Quizzical', // q
        'Ravishing,Rude,Robust,Radiant,Refined,Resplendent', // r
        'Statuesque,Shocking,Sinful,Sizzling,Seductive,Scrumptious,Stunning,Supefying,Shapely,Stacked,Splendid,Sublime,Strutting', // s
        'Tantalizing,Tempting,Towering', // t
        'Unbelievable,Unreal,Unavoidable,Unconquerable', // u
        'Vivacious,Vexing', // v
        'Witchy,Wild,Winning,Wondrous,Wonderful,Well-Endowed,Well-Formed', // w
        'Exciting,Excellent', // x
        'Youthful', // y
        'Zaftig,Zany,Zealous'  // z
    ];


    this.frenchFname = [ "Fifi","Gigi","Trixie","Jolie","Babette","Angelique","Colette","Amelie","Aimee","Antoinette",
                "Blanche","Caresse","Cherie","Chantal","Clarice","Dominique","Georgette","Vivienne","Yvette" ];
    this.frenchLname = [ "LeMure","de Ville","DeVil","au Lait","du Bois","diVine","Parfait",
                "d'Arcy","Champagne","ala Mode","Petite","de Vivre","Fatale", "de Milo","Frou-frou","Royale","Flambee",
                "Brassiere","DuPree","Deluxe"
            ];
    this.objectFname = [
                "Ruby","Amethyst","Sapphire","Emerald","Onyx","Topaz","Pearl","Crystal","Amber",
                "Montana","Dakota","Florida","Georgia","Nevada","Carolina","Virginia","Wyoming","Venus","Cairo",
                "Daisy","Violet","Rose","Buttercup","Holly","Magnolia","Pansy","Lavender","Hyacinth","Dahlia","Camellia","Azalea","Begonia","Blossom","Saffron","Bluebell","Jasmine","Poppy","Indigo","Flora","Iris",
                "Ginger","Rosemary","Cherry","Pepper","Coco","Sugar","Honey","Cinnamon",
                "Brandy","Tanqueray","Martini","Ambrosia",
                "Kitty","Tabby","Rusty","Fluffy",
                "Blaze","Sparkle",
                "Friday","Wednesday","April","May","June","July",
                "Venus","Jezebel",
                "Peaches","Marmalade","Tangerine","Ambrosia","Twinkie",
                "Starlight","Sparkles","Panties","Ecstasy","Starlet",
                "Hypatia","Messalina","Comfort",
                "Allegra","Claritin","Advair","Brilinta","Cymbalta","Doribax","Fetzima","Evista","Flovent","Hyalgan","Januvia","Keppra","Lariam","Lexiva","Lodine","Loriten","Lovaza","Lyrica","Nuedexta","Pamelor","Pamprin","Paxil","Plavix","Polly-Citra","Pristiq","Provera","Ranexa","Rapa-Flo","Renvela","Roxanol","Serophene","Sonata","Thiamine","Valcyte","Valtrex","Viagra","Vioxx","Yasmin",

            ];
    this.objectLname = [
                "Kiss","Frontier","Fondue","Express","Galore","Mature","Bandersnatch","Delight",
                "Plum","Apple","Cherry","Berry",
                "Dream","Wishes","Sweet",
                "Blue","Night","Redd","Violet","Lotus"
    ];
    this.wildLname = [
                "de Light","Sunshine","Passion","Divine","Ecstasy","Fire","Storm","Falls","Spice","Fury",
                "Whispers","Mist","Starlight","Bottom","Wilde","Starr","Supreme","Snow",
                "Dandelion",
                "North","South","West"
            ];
    this.punFname = [
                "Fanny","Candy","Fonda","Lovey","Ophelia","Ida","Iva","Pussy","Merry","Happy",
                "Juicy","Rusty","Dusty","Ivana"
            ];
    this.punLname = [
                "Cox","Bottom","Sitwell","Cummings","Topps","Wank","Peters","Cladwell","O'Toole","Handfull",
                "Biggun","Petting","Plenty","Bottie","Cravesitt","Purdy"
            ];
            
    this.alphaFname = [
                "Annie,Amelia,Anna,Angie",
                "Betty,Bea,Brenda,Brandy",
                "Carrie,Cherry,Candy",
                "Debbie,Daniella,Dina",
                "Edie,Etta,Emma,Eva",
                "Fannie,Frannie,Frida",
                "Gladys,Gigi,Georgette",
                "Harriet,Hannah,Hattie,Holly,Heather",
                "Ida,Ivy,Imelda,Imelda,Iris",
                "Julie,Jill,Jo,Jennie,Jasmine",
                "Kaitlyn,Karen,Kimmy,Krissy",
                "Louisa,Lydia,Lucy",
                "Marilyn,Minnie,Maggie,Marigold",
                "Nellie,Nancy,Nina,Noel",
                "Ophelia,Olivia,Olive",
                "Pansy,Petunia,Patty",
                "Qadesh,Qadira,Qiana,Qubaliah,Queisha,Quella,Quieta,Quoba",
                "Roberta,Ruthie,Rachel,Raquel",
                "Susie,Sabrina,Sammi",
                "Teresa,Tiffany,Taffy,Tina",
                "Una,Uma",
                "Veronica,Velma,Vicki",
                "Wanda,Wilhelmina,Weeza",
                "Xuxa,Xaviera",
                "Yancey,Yolanda",
                "Zelda"
            ];
    this.placename = [
                "Anchorage,Arizona,Atlanta,Alabama,Albany,Abilene,Albuquerque,Atlantic City",
                "Boston,Boise,Birmingham,Bismarck,Buffalo",
                "Chicago,California,Carolina,Colorado,Calgary,Charlotte,Charleston,Chattanooga",
                "Detroit,Dallas,Denver,Danville,Dayton,Des Moines,Davenport",
                "Eltingville,Evansville,Erie,Escondido",
                "Florida,Frisco,Fort Lauderdale,Fort Wayne,Fort Worth,Fresno",
                "Georgia,Glendale,Grand Rapids,Green Bay,Geneva",
                "Hawaii,Hilo,Honolulu,Houston,Hartford,Huntsville",
                "Idaho,Indiana,Iowa,Indianapolis,Inglewood,Irvine,Irving",
                "Jersey,Jacksonville,Jersey City,Joliet,Janesville",
                "Kentucky,Kansas,Kansas City",
                "Louisiana,L.A.,Lafayette,Lansing,Little Rock,Livonia,Louisville,Lubbock",
                "Montana,Memphis,Maryland,Michigan,Massachusetts,Missoula,Minneapolis,Miami,Montreal,Madison,Mesa,Milwaukee,Murfreesboro",
                "Nevada,Natchez,Nashville,Knoxville,Naperville,New Orleans,New Haven,New York",
                "Oklahoma,Omaha,Oregon,Orlando,Oakland,Oxnard",
                "Parsippany,Philly,Portland,Pennsylvania,Phoenix,El Paso,Pittsburgh,Palmdale,Pasadena,Peoria,Pomona,Provo,Pueblo",
                "Queensland,Quebec",
                "Rhode Island,Reno,Raleigh,Richmond,Riverside",
                "Sandusky,San Francisco,Seattle,Savannah,Santa Fe, St. Louis,Scarsdale,Sacramento,Salem,Salt Lake City,San Diego,Scottsdale,Shreveport,Spokane,Springfield,Syracuse",
                "Tampa,Texas,Tallahassee,Taos,Tuscaloosa,Tacoma,Tempe,Toledo,Topeka,Tuscon,Tulsa",
                "Ulan Bator,Utah,Utrecht",
                "Virginia,Vegas,Vermont,Vancouver,Vallejo",
                "Washington,Walla Walla,Wisconsin,Winnipeg,Wichita,Waco",
                "Exeter",
                "Yonkers,Yamaguchi,Yamato,Yongzhouk",
                "Zanzibar,Zaragoza,Zurich"
            ];
    this.honorific = [ "Miss","Lady","Madam","Princess","Duchess","Miss Lady","Madam Chairwoman","Mrs.","Mme.","Queen",
                "Cowgirl","HRH","Li'l","Nurse","Dame","Librarian" ];


    this.optionalSuffix = function(bobj) {
        if (Math.random() > 0.5) {
            var whichOne = Math.floor(Math.random() * 26);
            if (Math.random() > 0.5)
                return ", the "+bobj.rand(bobj.alphaAdj[whichOne].split(',')) + ' ' + bobj.rand(bobj.alphaNoun[whichOne].split(',')) + ' from ' + bobj.rand(bobj.placename[whichOne].split(','));
            else
                return ", the " + bobj.rand(bobj.placename[whichOne].split(',')) + ' ' + bobj.rand(bobj.alphaNoun[whichOne].split(','));
        }
        return '';
    };

    this.namelist = new Array(

        function(bobj) {
            return [ bobj.rand(bobj.frenchFname) + ' ' + bobj.rand(bobj.frenchLname), bobj.frenchFname.length * bobj.frenchLname.length ];
        }, 
        function(bobj) {
            return [ bobj.rand(bobj.objectFname) + ' ' + bobj.rand(bobj.wildLname), bobj.objectFname.length * bobj.wildLname.length ];
        }, 
        function(bobj) {
            return [ bobj.rand(bobj.punFname) + ' ' + bobj.rand(bobj.punLname) + bobj.optionalSuffix(bobj), bobj.punFname.length * bobj.punLname.length * bobj.placename.length * bobj.alphaNoun.length * 2 ];
        },
        function(bobj) {
            var num, arr1, arr2;
            

            if (! bobj.totalAlphaLength) {
                bobj.totalAlphaLength = 0;
                bobj.totalPlaceLength = 0;
                for (var i = 0; i < 26; ++i) {
                    bobj.totalAlphaLength += bobj.alphaFname[i].split(',').length;
                    bobj.totalPlaceLength += bobj.placename[i].split(',').length;
                }
            }
            do {
                num = Math.floor(Math.random() * 26);
            } while (bobj.alphaFname[num] == '' || bobj.placename[num] == '');
            
            arr1 = bobj.alphaFname[num].split(',');
            arr2 = bobj.placename[num].split(',');
            
            return [ bobj.rand(arr2) + ' ' + bobj.rand(arr1), bobj.totalAlphaLength * bobj.totalPlaceLength ] ;
        },
        function(bobj) {
            if (! bobj.totalAlphaLength) {
                bobj.totalAlphaLength = 0;
                bobj.totalPlaceLength = 0;
                for (var i = 0; i < 26; ++i) {
                    bobj.totalAlphaLength += bobj.alphaFname[i].split(',').length;
                    bobj.totalPlaceLength += bobj.placename[i].split(',').length;
                }
            }
            if (! bobj.suffixLength) {
                bobj.alphaNounLength = 0;
                for (var i = 0; i < 26; ++i)
                    bobj.alphaNounLength += bobj.alphaNoun[i].split(',').length;
                
                bobj.suffixLength = bobj.totalPlaceLength * bobj.alphaNounLength;
            }
            var retnum = bobj.honorific.length * bobj.objectFname.length * (bobj.suffixLength + 1);
            if (Math.random() > 0.5) {
                return [ bobj.rand(bobj.honorific) + ' ' + bobj.rand(bobj.objectFname) + bobj.optionalSuffix(bobj), retnum ];
            } else {
                return [ bobj.rand(bobj.honorific) + ' ' + bobj.rand(bobj.objectFname) + ' ' + bobj.rand(bobj.objectLname) + bobj.optionalSuffix(bobj), retnum ];
            }
        }
    );

    this.name = function() { 
        return this.namelist[Math.floor(Math.random() * this.namelist.length)](this); 
    };

    this.namespaceSize = function() {
        var total = 0;
        for (var i = 0; i < this.namelist.length; ++i) {
            total += this.namelist[i](this)[1];
        }
        return total;
    }
}
