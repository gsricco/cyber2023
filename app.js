const Search = {
    data() {
        return {
            results: [],
            query: '',
            totalfound: '',
            worldpercent: '',
            selectedindex: [],
            selectedname: '',
            mktuselectname: '',
            mktuselectinfo: '',
            allmktuindexes: [
                {
                    index: "1",
                    desc: "Продукты химические, предназначенные для использования в промышленных, научных целях, в фотографии, сельском хозяйстве, садоводстве и лесоводстве; смолы необработанные синтетические, материалы необработанные пластические; составы для тушения огня и предотвращения пожаров; препараты для закалки и пайки металлов; вещества для дубления кожи и шкур животных; вещества клеящие для промышленных целей; мастики и другие наполнители пастообразные; компосты, удобрения, навоз; препараты биологические для промышленных и научных целей."
                },
                {
                    index: "2",
                    desc: "Краски, политуры, лаки; средства защитные, предохраняющие металлы от коррозии и древесину от разрушения; вещества красящие; чернила типографские, чернила для маркировки и для гравюр; смолы необработанные природные; металлы листовые и порошкообразные, используемые для художественно-декоративных целей и художественной печати."
                },
                {
                    index: "3",
                    desc: "Продукты косметические и туалетные немедицинские; средства для чистки зубов немедицинские; продукты парфюмерные, масла эфирные; препараты для отбеливания и вещества прочие для стирки; препараты для чистки, полирования, обезжиривания и абразивной обработки."
                },
                {
                    index: "4",
                    desc: "Масла, смазки и воски промышленные; материалы смазочные; составы для поглощения, смачивания и связывания пыли; топлива и материалы осветительные; фитили и свечи для освещения."
                },
                {
                    index: "5",
                    desc: "Изделия фармацевтические, препараты медицинские и ветеринарные; изделия гигиенические для медицинских целей; питание диетическое и вещества для медицинских или ветеринарных целей, питание детское; добавки пищевые для человека и животных; пластыри, материалы перевязочные; материалы для пломбирования зубов и изготовления зубных слепков; средства дезинфицирующие; препараты для уничтожения вредных животных; фунгициды, гербициды."
                },
                {
                    index: "6",
                    desc: "Металлы обычные и их сплавы, руды; материалы металлические строительные; конструкции и сооружения передвижные металлические; тросы и проволока металлические, неэлектрические; изделия мелкие металлические и скобяные; контейнеры металлические для хранения и транспортировки; сейфы."
                },
                {
                    index: "7",
                    desc: "Машины, оборудование машинное и инструменты с механическим приводом; двигатели, за исключением предназначенных для наземных транспортных средств; соединения и элементы передач, за исключением предназначенных для наземных транспортных средств; орудия сельскохозяйственные, иные, чем орудия с ручным управлением; инкубаторы для яиц; автоматы торговые."
                },
                {
                    index: "8",
                    desc: "Орудия и инструменты ручные; изделия ножевые, вилки и ложки; оружие холодное; бритвы."
                },
                {
                    index: "9",
                    desc: "Приборы и инструменты научные, исследовательские, навигационные, геодезические, фотографические, кинематографические, аудиовизуальные, оптические, для взвешивания, измерения, сигнализации, обнаружения, тестирования, спасания и обучения; приборы и инструменты для передачи, распределения, трансформации, накопления, регулирования или управления распределением или потреблением электричества; аппаратура и инструменты для записи, передачи, воспроизведения или обработки звука, изображений или данных; носители записанные или загружаемые, программное обеспечение, чистые носители записи и хранения цифровой или аналоговой информации; механизмы для аппаратов с предварительной оплатой; аппараты кассовые, устройства счетные; компьютеры и компьютерная периферия; гидрокостюмы для дайвинга, маски, беруши, перчатки для дайверов, зажимы для носа для дайверов и пловцов, аппараты дыхательные для подводного плавания; оборудование для тушения огня."
                },
                {
                    index: "10",
                    desc: "Приборы и инструменты хирургические, медицинские, стоматологические и ветеринарные; протезы конечностей, протезы глазные и зубные; изделия ортопедические; материалы для наложения швов; оборудование терапевтическое и вспомогательное, предназначенное для людей с ограниченными возможностями; приборы для массажа; аппараты, оборудование и изделия для детей младенческого возраста; аппараты, приборы и товары для сексуальной активности."
                },
                {
                    index: "11",
                    desc: "Устройства и установки для освещения, отопления, охлаждения, получения пара, приготовления пищи, сушки, вентиляции, водоснабжения и санитарно-технические."
                },
                {index: "12", desc: "Cредства транспортные; аппараты, перемещающиеся по земле, воде и воздуху."},
                {index: "13", desc: "Оружие огнестрельное; боеприпасы и снаряды; вещества взрывчатые; фейерверки."},
                {
                    index: "14",
                    desc: "Металлы благородные и их сплавы; изделия ювелирные, бижутерия, камни драгоценные и полудрагоценные; часы и приборы хронометрические."
                },
                {
                    index: "15",
                    desc: "Инструменты музыкальные; пюпитры и подставки для музыкальных инструментов; палочки дирижерские."
                },
                {
                    index: "16",
                    desc: "Бумага, картон; продукция печатная; материалы для переплетных работ; фотоснимки; товары писчебумажные, принадлежности офисные, за исключением мебели; вещества клейкие для канцелярских и бытовых целей; принадлежности для художников и материалы для рисования; кисти; материалы учебные и пособия наглядные; листы, пленка и мешки пластмассовые для упаковки и пакетирования; шрифты, клише типографские."
                },
                {
                    index: "17",
                    desc: "Каучук, резина, гуттаперча, асбест, слюда необработанные и частично обработанные и заменители этих материалов; пластмассы и резина в экструдированной форме, используемые в производстве; материалы для конопачения, уплотнения и изоляции; гибкие трубы неметаллические."
                },
                {
                    index: "18",
                    desc: "Кожа и имитация кожи; шкуры животных; изделия багажные и сумки для транспортировки; зонты от дождя и солнца; трости; хлысты, кнуты, сбруя конская и изделия шорные; ошейники, поводки и одежда для животных."
                },
                {
                    index: "19",
                    desc: "Материалы строительные неметаллические; трубы жесткие неметаллические для строительных целей; асфальт, смолы, гудрон и битум; конструкции и сооружения передвижные неметаллические; памятники неметаллические."
                },
                {
                    index: "20",
                    desc: "Мебель, зеркала, обрамления для картин; контейнеры для хранения или транспортировки неметаллические; рог, кость, слоновая кость, перламутр, необработанные или частично обработанные; ракушки; морская пенка; янтарь."
                },
                {
                    index: "21",
                    desc: "Утварь и посуда домашняя и кухонная; посуда для приготовления пищи и столовая посуда, за исключением вилок, ножей и ложек; расчески и губки; щетки, за исключением кистей; материалы для щеточных изделий; материал для чистки и уборки; стекло необработанное или частично обработанное, за исключением строительного стекла; изделия из стекла, фарфора и фаянса."
                },
                {
                    index: "22",
                    desc: "Канаты, веревки, бечевки; сети; палатки, навесы; тенты из текстильных или синтетических материалов; паруса; мешки, для транспортировки и хранения товаров без упаковки; материалы набивочные, за исключением бумажных, картонных, резиновых и пластических; материалы из текстильного волокнистого сырья и их заменителей."
                },
                {index: "23", desc: "Нити текстильные и пряжа."},
                {
                    index: "24",
                    desc: "Текстиль и его заменители; белье для бытового использования; шторы из текстильного и пластического материалов."
                },
                {index: "25", desc: "Одежда, обувь, головные уборы."},
                {
                    index: "26",
                    desc: "Кружева, шнурки и изделия вышитые, тесьма и ленты; пуговицы, кнопки, крючки и блочки, булавки и иглы; цветы искусственные; украшения для волос; волосы искусственные."
                },
                {
                    index: "27",
                    desc: "Ковры, циновки, маты, линолеум и прочие покрытия для полов; стенные обои и обивочные материалы нетекстильные."
                },
                {
                    index: "28",
                    desc: "Игры, игрушки; аппараты для видеоигр; товары гимнастические и спортивные; украшения елочные."
                },
                {
                    index: "29",
                    desc: "Мясо, рыба, птица и дичь; экстракты мясные; овощи и фрукты консервированные, сушеные и подвергнутые тепловой обработке; желе, варенье, компоты; яйца; молоко, сыр, масло, йогурт и другие молочные продукты; масла и жиры пищевые."
                },
                {
                    index: "30",
                    desc: "Кофе, чай, какао и их заменители; рис, макароны и лапша; тапиока (маниока) и саго; мука и продукты зерновые; хлеб, выпечка и изделия кондитерские; шоколад; мороженое, сорбет и другие продукты из съедобного льда; сахар, мед, сироп из патоки; дрожжи, порошки пекарные; соль, специи, консервированные травы; уксус, соусы, приправы; лед для охлаждения."
                },
                {
                    index: "31",
                    desc: "Продукты сельскохозяйственные, аквакультуры, садово-огородные и лесные, в сыром виде и необработанные; зерно и семена, необработанные и непереработанные; фрукты, овощи и ароматические травы свежие; растения и цветы живые; луковицы, саженцы и семена; животные живые; корма и напитки для животных; солод."
                },
                {
                    index: "32",
                    desc: "Пиво; безалкогольные напитки; воды минеральные и газированные; напитки и соки фруктовые; сиропы и прочие составы для изготовления безалкогольных напитков."
                },
                {
                    index: "33",
                    desc: "Алкогольные напитки (за исключением пива); продукты алкогольные для приготовления напитков."
                },
                {
                    index: "34",
                    desc: "Табак и заменители табака; сигареты и сигары; электронные сигареты и вапорайзеры для курения; принадлежности курительные; спички."
                },
                {
                    index: "35",
                    desc: "Управление бизнесом, организация бизнеса, бизнес-администрирование; служба офисная."
                },
                {index: "36", desc: "Услуги страховые; операции с недвижимостью."},
                {
                    index: "37",
                    desc: "Услуги строительные; услуги по установке и ремонту; разработка полезных ископаемых, добыча нефти и газа."
                },
                {index: "38", desc: "Услуги телекоммуникационные."},
                {index: "39", desc: "Транспортировка; упаковка и хранение товаров; организация путешествий."},
                {
                    index: "40",
                    desc: "Обработка материалов; переработка мусора и отходов; очистка воздуха и обработка воды; услуги полиграфические; консервирование пищевых продуктов и напитков."
                },
                {
                    index: "41",
                    desc: "Воспитание; образование; развлечения; организация спортивных и культурно-просветительных мероприятий."
                },
                {
                    index: "42",
                    desc: "Научные и технологические услуги и относящиеся к ним научные исследования и разработки; услуги по промышленному анализу, промышленным научным исследованиям и промышленному дизайну; услуги контроля качества и аутентификации; разработка и развитие компьютеров и программного обеспечения."
                },
                {
                    index: "43",
                    desc: "Услуги по обеспечению пищевыми продуктами и напитками; обеспечение временного проживания."
                },
                {
                    index: "44",
                    desc: "Услуги медицинские; услуги ветеринарные; услуги в области гигиены и косметики для людей и животных; услуги в области сельского хозяйства, аквакультуры, огородничества и лесоводства."
                },
                {
                    index: "45",
                    desc: "Услуги юридические; службы безопасности для физической защиты материальных ценностей и индивидуальных лиц; услуги персональные и социальные, оказываемые другим для удовлетворения потребностей индивидуальных лиц."
                }
            ],
            sortedmktuindexes: [],
            selectedmktuindexes: '',
            mktuquery: '',
            risksopost: [],
            loading: false,
            noregproblems: false,
            displaymodalblock: "none",
        }
    },
    methods: {
        async createServer() {
            this.noregproblems = false;
            this.results = [];
            this.worldpercent = '';
            if (this.query == '') return;
            let val = this.query
            this.loading = true;

            document.getElementById("filter").classList.add("no-show");
            document.getElementById("searchclass").classList.add("no-show");
            document.querySelector('#container2').style.cssText = `top:0;`
            document.querySelector('.main__search').style.cssText = "top:0;"
            document.documentElement.scrollTop = 0;
            const data = {
                query: this.query,
                "mktu_array": this.selectedmktuindexes.slice(0, -1)
            }
            const res = await fetch('http://localhost:8080/api/v1/search/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            const results2 = await res.json()
            this.results = results2.query_items
            if (this.results.length == 0) {
                this.noregproblems = true;
            }
            this.totalfound = results2.total_found
            // this.worldpercent = Math.round(results2.word_percent_found * 100)
            this.worldpercent = this.totalfound
            if (this.worldpercent >= 70) {
                this.risksopost = ['Высокий риск сопоставления', 'modal__box-desc-head--red']
            }
            if ((this.worldpercent < 70) && (this.worldpercent >= 35)) {
                this.risksopost = ['Средний риск сопоставления', 'modal__box-desc-head--orange']
            }
            if (this.worldpercent < 35) {
                this.risksopost = ['Низкий риск сопоставления', 'modal__box-desc-head--green']
            }
            this.loading = false;
            //
            this.query = ''
            this.selectedmktuindexes = ''
            const ulNumber = document.getElementsByClassName('ul-number')
            const ulNumberMob = document.querySelectorAll('#ul-number-mob')
            for (let i = 0; i < ulNumber.length; i++) {
                ulNumber[i].style.cssText = `background: #fff;color: #dd9c19;`
            }
            for (let i = 0; i < ulNumberMob.length; i++) {
                ulNumberMob[i].style.cssText = `background: #fff;color: #dd9c19;`
            }

            let strMKTY=''
            if(data.mktu_array) strMKTY = ' и МКТУ:'
            document.querySelector('#searchData').innerHTML=`<span>Показан результат поиска для:</span> ${data.query.toUpperCase()} ${strMKTY} ${data.mktu_array}. <button class="btnReset" onclick="location.reload()">Сбросить результаты</button>`
            document.querySelector('#searchData1').innerHTML=`<span>Показан результат поиска для:</span></br>  ${data.query.toUpperCase()}  ${strMKTY} ${data.mktu_array}.</br> <button class="btnResetMob" onclick="location.reload()">Сбросить результаты</button>`

        },
        async showinfo(id, img, cardindex, mktu, name) {
            this.loading = true;
            this.displaymodalblock = "none"
            this.selectedindex = []
            this.selectedname = ''
            this.mktuselectname = ''
            this.mktuselectinfo = ''
            const data = {
                index: cardindex
            }
            const res = await fetch('http://localhost:8080/api/v1/trademark/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            const selectedindex2 = await res.json()
            this.selectedindex = selectedindex2.item
            this.selectedname = name
            this.loading = false;
            this.displaymodalblock = "block"
        },
        showmktuinfo(mktu) {
            this.mktuselectname = mktu.mktu_number
            this.mktuselectinfo = mktu.mktu_data
        },
        changekmtuselector() {
            this.mktuquery = event.target.value;
            this.sortedmktuindexes = [];
            for (i in this.allmktuindexes) {
                if ((this.mktuquery.toLowerCase() == this.allmktuindexes[i].index.toLowerCase()) || (this.mktuquery.toLowerCase() == this.allmktuindexes[i].desc.toLowerCase())) {
                    this.sortedmktuindexes.push(this.allmktuindexes[i])
                } else if ((this.mktuquery.toLowerCase() == this.allmktuindexes[i].index.toLowerCase().match(this.mktuquery.toLowerCase())) || (this.mktuquery.toLowerCase() == this.allmktuindexes[i].desc.toLowerCase().match(this.mktuquery.toLowerCase()))) {
                    this.sortedmktuindexes.push(this.allmktuindexes[i])
                } else if ((this.mktuquery.toLowerCase().indexOf(this.allmktuindexes[i].index.toLowerCase()) != -1) || (this.mktuquery.toLowerCase().indexOf(this.allmktuindexes[i].desc.toLowerCase()) != -1)) {
                    this.sortedmktuindexes.push(this.allmktuindexes[i])
                }
            }
        },
        selectmktu(mktuselectedindex, event) {
            if (this.selectedmktuindexes.includes(mktuselectedindex + ",")) return;
            this.selectedmktuindexes += mktuselectedindex + ","
        },
        noshow(e) {
            e.preventDefault();
            var element = document.getElementById("filter");
            var searchclass = document.getElementById("searchclass");
            const container = document.querySelector('#container2');
            const form = document.querySelector('.main__search-filter--box')

            if (element.classList.contains("no-show")) {
                if (window.screen.width < 600) {
                    const modalSearchMKT = document.getElementById('modalSearchMKT');
                    modalSearchMKT.style.display = 'flex';
                }
                document.querySelector('.main__search').style.cssText = "top:230px;"
                element.classList.remove("no-show");
                searchclass.classList.remove("no-show");
                element.focus()
                container.style.cssText = `top:112px;`

            } else {
                element.classList.add("no-show");
                searchclass.classList.add("no-show");
                container.style.cssText = `top:0;`
                document.querySelector('.main__search').style.cssText = "top:0;"
                document.documentElement.scrollTop = 0;
            }
        },
        removeselectmktu(mktuselectedindex) {

            this.selectedmktuindexes = this.selectedmktuindexes.replace(mktuselectedindex + ",", "")
            document.getElementsByClassName('ul-number')[mktuselectedindex-1].style.cssText = `background: #fff;color: #dd9c19;`
            document.querySelectorAll('#ul-number-mob')[mktuselectedindex-1].style.cssText = `background: #fff;color: #dd9c19;`
        }
    }
}
Vue.createApp(Search).mount('#wrap')

const ulNumber = document.getElementsByClassName('ul-number')
for (let i = 0; i < ulNumber.length; i++) {
    ulNumber[i].onclick = () => ulNumber[i].style.cssText = `background: #dd9c19;color: #fff;`
}



