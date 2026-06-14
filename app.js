/* ==========================================================================
   Osaka Travel Guide - Main Application Logic (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. STATE & DATA DEFINITIONS
    // ==========================================
    
    // Attraction Detail Data
    const attractionDetails = {
        'detail-dotonbori': {
            title: '도톤보리 & 신사이바시 (道頓堀 & 心斎橋)',
            category: '쇼핑 & 맛집',
            image: 'images/osaka_hero.jpg',
            description: '오사카 여행의 상징인 도톤보리는 화려한 네온사인과 거대한 입체 간판이 가득한 오사카 최고의 번화가입니다. 도톤보리 운하를 따라 놓인 글리코상 앞에서 인증샷을 남기고, 인접한 신사이바시스지 상점가에서 쇼핑을 만끽하세요.',
            info: {
                '위치': '지하철 미도스지선/센니치마에선 난바역 14번 출구 도보 3분',
                '추천 시간': '화려한 LED 조명이 켜지는 오후 6시 ~ 밤 10시',
                '주변 맛집': '타코야끼 와나카, 치보(오코노미야끼), 쿠시카츠 다루마',
                '이용 꿀팁': '도톤보리 리버 크루즈는 오사카 주유패스 소지 시 무료 탑승이 가능합니다. 현장 매표소에서 낮 시간대에 실물 승차권으로 사전 교환해두는 것이 좋습니다.'
            }
        },
        'detail-castle': {
            title: '오사카성 (大阪城)',
            category: '역사 & 문화',
            image: 'images/osaka_castle.jpg',
            description: '16세기 도요토미 히데요시가 건설한 웅장한 성으로, 현재의 천수각은 1931년에 재건되었습니다. 거대한 석벽과 넓은 해자로 둘러싸여 있으며, 봄철 벚꽃과 가을철 단풍이 흐드러지게 피어나는 아름다운 공원입니다.',
            info: {
                '위치': '지하철 다니마치선 다니마치4초메역 1-B번 출구 도보 10분, 또는 JR 오사카조코엔역 도보 5분',
                '이용 요금': '천수각 입장료 600엔 (오사카 주유패스 무료)',
                '운영 시간': '오전 9시 ~ 오후 5시 (마지막 입장 4시 30분, 시즌별 연장 운영)',
                '이용 꿀팁': '천수각 내부에는 역사 전시관이 있으며 8층 전망대에서는 오사카 시내를 한눈에 볼 수 있습니다. 대기줄이 매우 기므로 아침 일찍 방문하거나 주유패스 전용 대기줄을 확인하세요.'
            }
        },
        'detail-shinsekai': {
            title: '신세카이 & 츠텐카쿠 (新世界 & 通天閣)',
            category: '복고풍 & 거리',
            image: 'images/shinsekai.jpg',
            description: '1912년 파리와 뉴욕의 놀이공원을 모방하여 만든 오사카의 옛 번화가입니다. 츠텐카쿠 전망대를 중심으로 메이지·쇼와 시대의 빈티지한 일본 감성이 묻어나는 레트로 골목이 이어지며, 맥주 한잔과 꼬치 튀김을 즐기기 좋습니다.',
            info: {
                '위치': '지하철 사카이스지선 에비스초역 3번 출구 도보 3분, 또는 미도스지선 동물원앞역 5번 출구',
                '이용 요금': '일반 입장 900엔 (오사카 주유패스 무료 입장 가능 시간 확인 필수)',
                '추천 명소': '츠텐카쿠 타워 슬라이드(미끄럼틀), 쟌쟌 요코초 골목',
                '이용 꿀팁': '오사카 대표 서민 음식인 바삭한 "쿠시카츠(꼬치튀김)" 원조 가게들이 밀집해 있습니다. 소스는 단 한 번만 찍어야 하는 독특한 규칙(위생용)이 있으니 꼭 지켜주세요.'
            }
        },
        'detail-food': {
            title: '오사카 대표 스트리트 푸드 (Osaka Street Food)',
            category: '오사카 미식',
            image: 'images/osaka_food.jpg',
            description: '오사카는 예로부터 "쿠이다오레(먹다가 망한다)"라는 말이 있을 정도로 음식 문화가 발달했습니다. 달콤 짭조름한 소스의 Okonomiyaki, 겉은 바삭하고 속은 부드러운 Takoyaki, 바삭한 꼬치 튀김인 Kushikatsu까지 길거리 곳곳에 먹거리가 넘쳐납니다.',
            info: {
                '대표 메뉴 1': '타코야끼 (약 500~800엔 / 8알) - 오사카식 타코야끼는 안이 흐물흐물하고 부드러운 것이 특징입니다.',
                '대표 메뉴 2': '오코노미야끼 (약 1,000~1,800엔) - 양배추와 돼지고기, 해산물을 밀가루 반죽에 섞어 철판에 굽는 한국의 빈대떡 같은 요리입니다.',
                '대표 메뉴 3': '쿠시카츠 (꼬치당 120~300엔) - 육류, 야채, 해산물 등을 꼬치에 꽂아 빵가루를 입혀 바삭하게 튀겨냅니다.',
                '미식 추천지': '도톤보리 메인 거리, 쿠로몬 시장, 우메다 한큐 3번가 지하 식당가'
            }
        }
    };

    // Seasonal Weather Data
    const weatherData = {
        spring: {
            title: '🌸 설레는 벚꽃의 계절, 봄',
            months: '3월 ~ 5월',
            temp: '10°C ~ 20°C',
            summary: '여행하기 가장 좋은 쾌적하고 온화한 날씨입니다. 4월 초순에는 오사카성 및 조폐국을 비롯한 도시 전역에 아름다운 벚꽃(사쿠라)이 만개합니다.',
            clothing: '얇은 긴소매 옷에 아침저녁으로 입을 가벼운 가디건, 자켓, 코트 등을 겹쳐 입는 레이어드 룩을 추천합니다. 3월은 다소 쌀쌀할 수 있습니다.',
            events: '오사카성 벚꽃 축제, 오사카 조폐국 벚꽃길 개방 (4월 중순, 사전 예약제)'
        },
        summer: {
            title: '☀️ 활기 넘치는 네온과 축제의 계절, 여름',
            months: '6월 ~ 8월',
            temp: '25°C ~ 35°C',
            summary: '매우 덥고 습하며 6월 중순부터 7월 중순까지는 장마(바이우) 기간입니다. 장마가 끝나면 본격적인 폭염이 시작되나, 열정적인 축제와 불꽃놀이를 즐길 수 있습니다.',
            clothing: '땀 흡수가 잘 되는 면 소재의 가볍고 시원한 여름 옷차림이 필수입니다. 자외선 차단제, 모자, 선글라스, 양우산, 휴대용 선풍기를 지참하세요. 실내 에어컨 대비용 가벼운 셔츠도 유용합니다.',
            events: '오사카 텐진 마츠리 (7월 24~25일, 일본 3대 축제), 나니와 요도가와 불꽃축제 (8월 초)'
        },
        autumn: {
            title: '🍁 울긋불긋 낭만적인 단풍의 계절, 가을',
            months: '9월 ~ 11월',
            temp: '15°C ~ 23°C',
            summary: '봄만큼 여행하기 좋은 환상적인 날씨입니다. 태풍이 오는 9월 초를 제외하면 대체로 맑고 선선합니다. 11월 말에는 오사카 시내와 인근 교토에 붉은 단풍이 절정을 이룹니다.',
            clothing: '9월은 여전히 여름 기운이 남아 시원하게 입되, 10월부터는 가디건이나 자켓이 필요합니다. 11월엔 도톰한 스웨터, 트렌치코트, 데님 자켓이 알맞습니다.',
            events: '미도스지 런웨이(일루미네이션 시작), 미노오 국립공원 단풍 축제 (11월)'
        },
        winter: {
            title: '❄️ 반짝이는 야경과 온천의 계절, 겨울',
            months: '12월 ~ 2월',
            temp: '3°C ~ 10°C',
            summary: '한국에 비해서는 온화한 겨울 날씨로, 기온이 영하로 내려가는 일이 거의 없고 눈도 드물게 옵니다. 단, 바람이 불면 꽤 쌀쌀하며, 대신 하늘이 맑아 일루미네이션과 야경을 즐기기 매우 좋습니다.',
            clothing: '도톰한 코트나 경량 패딩, 다운 자켓이 필요합니다. 야외 활동을 오래 해야 하는 유니버설 스튜디오 같은 곳을 갈 때는 목도리, 장갑, 핫팩을 챙기시면 훨씬 좋습니다.',
            events: '미도스지 일루미네이션 (오사카 메인 대로를 가득 채우는 빛의 향연), 오사카성 일루미네이션'
        }
    };

    // Default Packing Checklist
    const defaultChecklist = [
        { id: 1, text: '여권 (유효기간 만료일 확인 필수!)', checked: true },
        { id: 2, text: 'Visit Japan Web 등록 완료 (QR코드 캡처)', checked: false },
        { id: 3, text: '엔화 환전 및 트래블월렛/로그 카드', checked: false },
        { id: 4, text: '110V 돼지코 변환 플러그 / 멀티탭', checked: false },
        { id: 5, text: 'eSIM 또는 포켓 와이파이 구매 및 등록', checked: false },
        { id: 6, text: '보조 배터리 (비행기 기내 수하물 보관)', checked: false },
        { id: 7, text: '비상약 (감기약, 지하실, 대역, 밴드)', checked: false },
        { id: 8, text: '교통패스 실물권 또는 모바일 바우처', checked: false },
        { id: 9, text: '편안한 운동화 (하루 평균 1.5만보 이상 걸음)', checked: false }
    ];

    // Travel Phrases Data
    const phraseData = {
        common: [
            { kr: '안녕하세요 (낮)', jp: 'こんにちは', pronun: '콘니치와', tip: '가장 기본적인 낮 인사' },
            { kr: '감사합니다', jp: 'ありがとうございます', pronun: '아리가토-고자이마스', tip: '존댓말로 고마움을 표시' },
            { kr: '실례합니다 / 저기요', jp: 'すみません', pronun: '스미마센', tip: '점원을 부르거나 길을 비켜달라고 할 때 유용' },
            { kr: '도와주세요', jp: '助けてください', pronun: '타스케테 쿠다사이', tip: '위급한 상황이나 곤란할 때 사용' },
            { kr: '화장실은 어디인가요?', jp: 'トイレはどこですか？', pronun: '토이레와 도코데스카?', tip: '쇼핑몰이나 식당에서 유용' },
            { kr: '한국어 메뉴판 있나요?', jp: '韓国語のメニューはありますか？', pronun: '칸코쿠고노 메뉴-와 아리마스카?', tip: '로컬 식당에서 물어볼 때' }
        ],
        restaurant: [
            { kr: '이것으로 주세요', jp: 'これ、ください。', pronun: '코레, 쿠다사이', tip: '메뉴판을 가리키며 주문할 때' },
            { kr: '맛있습니다', jp: '美味しいです。', pronun: '오이시-데스', tip: '음식을 서빙받거나 먹을 때 소감 표현' },
            { kr: '물 좀 주세요', jp: 'お水、ください。', pronun: '오미즈, 쿠다사이', tip: '식당에서 물을 리필 요청할 때' },
            { kr: '계산해 주세요', jp: 'お会計、お願いします。', pronun: '오카이케이, 오네가이시마스', tip: '다 먹고 자리 또는 카운터에서 계산할 때' },
            { kr: '카드 결제 되나요?', jp: 'カードは使えますか？', pronun: '카-도와 츠카에마스카?', tip: '식당 결제 방식 확인 시' },
            { kr: '잘 먹었습니다', jp: 'ごちそうさまでした。', pronun: '고치소-사마데시타', tip: '식당을 나갈 때 매너 있는 끝인사' }
        ],
        shopping: [
            { kr: '이거 얼마인가요?', jp: 'これはいくらですか？', pronun: '코레와 이쿠라데스카?', tip: '가격표가 없을 때 질문' },
            { kr: '면세(택스프리) 되나요?', jp: '免税はできますか？', pronun: '멘제-와 데키마스카?', tip: '드럭스토어, 백화점에서 필수 확인' },
            { kr: '새 제품이 있나요?', jp: '新しいのはありますか？', pronun: '아타라시이노와 아리마스카?', tip: '진열 상품 대신 새 상품을 원할 때' },
            { kr: '입어봐도 될까요?', jp: '試着してもいいですか？', pronun: '시챠쿠시테모 이이데스카?', tip: '옷 가게에서 피팅룸을 이용할 때' },
            { kr: '선물용 포장 부탁합니다', jp: 'プレゼント用でお願いします。', pronun: '푸레젠토요-데 오네가이시마스', tip: '포장을 요청할 때' }
        ],
        emergency: [
            { kr: '길을 잃었습니다', jp: '道に迷いました。', pronun: '미치니 마요이마시타', tip: '길을 잃어 현지 경찰이나 행인에게 도움 청할 때' },
            { kr: '여권을 분실했습니다', jp: 'パスポートを紛失しました。', pronun: '파스포-토오 훈시츠시마스타', tip: '영사관이나 경찰서에 알릴 때' },
            { kr: '아픕니다 / 의사를 불러주세요', jp: '気分が悪いです。医者を呼んでください。', pronun: '키분가 와루이데스. 이샤오 욘데쿠다사이', tip: '몸에 갑작스러운 이상이 생겼을 때' }
        ]
    };

    // ==========================================
    // 2. ELEMENT SELECTORS
    // ==========================================
    
    // Header & Nav
    const mainHeader = document.getElementById('main-header');
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    
    // Attraction Filter & Modal
    const filterBtns = document.querySelectorAll('.filter-btn');
    const attractionCards = document.querySelectorAll('.attraction-card');
    const detailModal = document.getElementById('detail-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBodyContent = document.getElementById('modal-body-content');
    
    // Pass Quiz
    const quizOptBtns = document.querySelectorAll('.quiz-opt-btn');
    const q1 = document.getElementById('q-1');
    const qInCity = document.getElementById('q-in-city');
    const qOutCity = document.getElementById('q-out-city');
    const quizResultBox = document.getElementById('quiz-result-box');
    const recommendedPassCard = document.getElementById('recommended-pass-card');
    const btnRestartQuiz = document.getElementById('btn-restart-quiz');
    
    // Weather Tabs
    const weatherTabs = document.querySelectorAll('.weather-tab-btn');
    const weatherContent = document.getElementById('weather-content');
    
    // Checklist
    const checklistItems = document.getElementById('checklist-items');
    const newItemInput = document.getElementById('new-item-input');
    const addItemBtn = document.getElementById('add-item-btn');
    const resetChecklistBtn = document.getElementById('reset-checklist-btn');
    
    // Budget Calculator
    const calcDays = document.getElementById('calc-days');
    const calcPeople = document.getElementById('calc-people');
    const calcFlight = document.getElementById('calc-flight');
    const calcHotel = document.getElementById('calc-hotel');
    const calcFood = document.getElementById('calc-food');
    const calcShopping = document.getElementById('calc-shopping');
    
    const flightVal = document.getElementById('flight-val');
    const shoppingVal = document.getElementById('shopping-val');
    
    const totalKrw = document.getElementById('total-krw');
    const totalJpy = document.getElementById('total-jpy');
    
    const summaryFlight = document.getElementById('summary-flight');
    const summaryHotel = document.getElementById('summary-hotel');
    const summaryFood = document.getElementById('summary-food');
    const summaryShopping = document.getElementById('summary-shopping');
    
    const barFlight = document.getElementById('bar-flight');
    const barHotel = document.getElementById('bar-hotel');
    const barFood = document.getElementById('bar-food');
    const barShopping = document.getElementById('bar-shopping');
    
    // Tips / Language Tabs
    const tabBtnTips = document.getElementById('tab-btn-tips');
    const tabBtnLang = document.getElementById('tab-btn-lang');
    const panelTips = document.getElementById('panel-tips');
    const panelLang = document.getElementById('panel-lang');
    const langCatBtns = document.querySelectorAll('.lang-cat-btn');
    const phraseContainer = document.getElementById('phrase-container');


    // ==========================================
    // 3. THEME TOGGLING (DARK & LIGHT)
    // ==========================================
    
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.className = savedTheme;
        } else {
            // Default is dark theme
            document.body.className = 'dark-theme';
        }
    };
    
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    initTheme();


    // ==========================================
    // 4. NAVIGATION & MOBILE DRAWER
    // ==========================================
    
    // Header Scroll Shadow / Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.style.boxShadow = 'var(--shadow-md)';
            mainHeader.style.padding = '5px 0';
        } else {
            mainHeader.style.boxShadow = 'none';
            mainHeader.style.padding = '0';
        }
        
        // Active Nav Link by Scroll Position
        const scrollPosition = window.scrollY + 120;
        const sections = ['about', 'attractions', 'transport', 'weather-pack', 'budget', 'tips'];
        
        sections.forEach(secId => {
            const el = document.getElementById(secId);
            if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${secId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    });

    // Mobile Drawer opening/closing
    const openDrawer = () => {
        mobileDrawer.classList.add('open');
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };
    
    const closeDrawer = () => {
        mobileDrawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    mobileMenuBtn.addEventListener('click', openDrawer);
    closeDrawerBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
            drawerLinks.forEach(dl => dl.classList.remove('active'));
            link.classList.add('active');
        });
    });


    // ==========================================
    // 5. ATTRACTIONS FILTER & DETAIL MODAL
    // ==========================================
    
    // Card Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            attractionCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 200);
                }
            });
        });
    });

    // Detail Modal Injection
    const openDetailModal = (targetId) => {
        const data = attractionDetails[targetId];
        if (!data) return;
        
        let infoHTML = '';
        for (const [key, value] of Object.entries(data.info)) {
            infoHTML += `
                <div class="modal-info-item">
                    <label>${key}</label>
                    <span>${value}</span>
                </div>
            `;
        }
        
        modalBodyContent.innerHTML = `
            <img class="modal-detail-img" src="${data.image}" alt="${data.title}">
            <h3 class="modal-detail-title">${data.title}</h3>
            <span class="modal-detail-tag">${data.category}</span>
            <p class="modal-detail-desc">${data.description}</p>
            <div class="modal-info-list">
                ${infoHTML}
            </div>
        `;
        
        detailModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        detailModal.classList.remove('open');
        if (!mobileDrawer.classList.contains('open')) {
            document.body.style.overflow = '';
        }
    };

    document.querySelectorAll('.btn-card-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            openDetailModal(targetId);
        });
    });

    modalClose.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeModal();
        }
    });


    // ==========================================
    // 6. INTERACTIVE PASS QUIZ (ADVISOR)
    // ==========================================
    
    let quizState = {
        outCity: null,
        subChoice: null
    };

    const runQuizRecommend = () => {
        let title = '';
        let desc = '';
        let badge = '';
        let tip = '';
        
        if (quizState.outCity === 'in-city') {
            if (quizState.subChoice === 'amazing-pass') {
                title = '오사카 주유패스 (Osaka Amazing Pass)';
                badge = '관광 + 지하철 무제한';
                desc = '오사카 시내 지하철과 버스를 1일 또는 2일간 무제한 탑승할 수 있고, 오사카성 천수각, 햅파이브 관람차, 우메다 스카이빌딩 공중정원, 츠텐카쿠 등 40여 개 주요 관광지를 무료로 입장할 수 있는 사기급 패스입니다.';
                tip = '하루에 관광지 3개 이상 입장 시 본전은 무조건 뽑습니다. 특히 리버크루즈나 공중정원은 단일 가격이 1,000엔이 넘어가므로 꼭 이용하세요!';
            } else {
                title = '오사카 지하철 1일 승차권 (Enjoy Eco Card) & ICOCA 카드';
                badge = '가성비 시내 여행';
                desc = '지하철을 하루 3~4번 이상 타는 날엔 평일 820엔, 주말/공휴일 620엔에 무제한 탈 수 있는 "엔조이 에코 카드"가 매우 합리적입니다. 지하철역 발권기에서 바로 구입 가능합니다. 그 외엔 일반 교통카드인 이코카(ICOCA) 카드를 이용해 찍고 다니시는 것이 가장 편리합니다.';
                tip = '가성비 위주의 쇼핑과 식도락 여행에 유리하며, 관광지 입장에 얽매이지 않고 자유롭게 돌아다니고 싶을 때 추천합니다.';
            }
        } else if (quizState.outCity === 'out-city') {
            if (quizState.subChoice === 'kansai-thru') {
                title = '간사이 쓰루 패스 (Kansai Thru Pass)';
                badge = '간사이 광역 연계';
                desc = '교토, 고베, 나라, 오사카, 시가, 와카야마 등 간사이 전 지역의 지하철, 사철(JR 제외), 버스를 지정한 날짜(2일 또는 3일권, 비연속 사용 가능) 동안 무제한 이용할 수 있는 패스입니다.';
                tip = '하루는 교토, 하루는 고베 등 오사카를 벗어나 다른 도시를 바쁘게 오갈 계획이 뚜렷한 분들에게 강력 추천합니다.';
            } else {
                title = '한큐 패스 (Hankyu Tourist Pass) / 한신 패스';
                badge = '개별 도시 특화 가성비';
                desc = '교토나 고베 중 한 곳만 다녀오고 싶을 때 한큐 노선만을 무제한 탈 수 있는 한큐 패스(1일권 700엔 대)가 매우 저렴합니다. 고베 지역의 맛집과 하버랜드를 목표로 갈 때는 한신 노선을 탈 수 있는 한신 패스(1일권 500엔 대)가 탁월한 대안입니다.';
                tip = '간사이 공항에서 파는 IC 카드와 연계해서 사용하면 교토 청수사나 아라시야마 갈 때 1만원 이하로 경비를 극단적으로 절약할 수 있습니다.';
            }
        }

        recommendedPassCard.innerHTML = `
            <span class="card-badge" style="position:static; display:inline-block; margin-bottom:12px;">${badge}</span>
            <h4>${title}</h4>
            <p>${desc}</p>
            <div class="result-tips">
                <strong>💡 꿀팁:</strong> ${tip}
            </div>
        `;
        
        qInCity.classList.add('hidden');
        qOutCity.classList.add('hidden');
        quizResultBox.classList.remove('hidden');
    };

    quizOptBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const val = e.currentTarget.getAttribute('data-value');
            
            if (val === 'in-city') {
                quizState.outCity = 'in-city';
                q1.classList.add('hidden');
                qInCity.classList.remove('hidden');
            } else if (val === 'out-city') {
                quizState.outCity = 'out-city';
                q1.classList.add('hidden');
                qOutCity.classList.remove('hidden');
            } else if (val === 'amazing-pass' || val === 'subway-pass' || val === 'kansai-thru' || val === 'hankyu-hanshin') {
                quizState.subChoice = val;
                runQuizRecommend();
            }
        });
    });

    btnRestartQuiz.addEventListener('click', () => {
        quizState = { outCity: null, subChoice: null };
        quizResultBox.classList.add('hidden');
        qInCity.classList.add('hidden');
        qOutCity.classList.add('hidden');
        q1.classList.remove('hidden');
    });


    // ==========================================
    // 7. SEASONAL WEATHER TAB ENGINE
    // ==========================================
    
    const showWeatherSeason = (seasonKey) => {
        const data = weatherData[seasonKey];
        if (!data) return;
        
        weatherContent.innerHTML = `
            <div class="weather-header-info">
                <div>
                    <h4 class="weather-desc-summary">${data.title}</h4>
                    <p style="font-size:0.9rem; color:var(--text-muted); margin-top:4px;"><i class="fa-solid fa-calendar-days"></i> 대상 월: ${data.months}</p>
                </div>
                <div class="weather-temp">${data.temp} <span>평균</span></div>
            </div>
            <div class="weather-details-grid">
                <div class="weather-detail-item">
                    <h4><i class="fa-solid fa-circle-question"></i> 시즌 개요</h4>
                    <p>${data.summary}</p>
                </div>
                <div class="weather-detail-item">
                    <h4><i class="fa-solid fa-shirt"></i> 추천 옷차림</h4>
                    <p>${data.clothing}</p>
                </div>
                <div class="weather-detail-item" style="grid-column: span 2;">
                    <h4><i class="fa-solid fa-star"></i> 주요 이벤트 / 즐길거리</h4>
                    <p>${data.events}</p>
                </div>
            </div>
        `;
    };

    weatherTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            weatherTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const season = tab.getAttribute('data-season');
            showWeatherSeason(season);
        });
    });

    // Load Default Spring
    showWeatherSeason('spring');


    // ==========================================
    // 8. INTERACTIVE CHECKLIST LOGIC
    // ==========================================
    
    let checklist = [];

    const loadChecklist = () => {
        const stored = localStorage.getItem('osaka_checklist');
        if (stored) {
            checklist = JSON.parse(stored);
        } else {
            checklist = [...defaultChecklist];
            saveChecklist();
        }
        renderChecklist();
    };

    const saveChecklist = () => {
        localStorage.setItem('osaka_checklist', JSON.stringify(checklist));
    };

    const renderChecklist = () => {
        checklistItems.innerHTML = '';
        
        checklist.forEach(item => {
            const li = document.createElement('li');
            li.className = `checklist-item ${item.checked ? 'checked' : ''}`;
            li.setAttribute('data-id', item.id);
            
            li.innerHTML = `
                <label class="checklist-label">
                    <input type="checkbox" ${item.checked ? 'checked' : ''}>
                    <span>${item.text}</span>
                </label>
                <button class="delete-item-btn" aria-label="아이템 삭제"><i class="fa-solid fa-xmark"></i></button>
            `;
            
            // Checkbox change handler
            li.querySelector('input').addEventListener('change', (e) => {
                item.checked = e.target.checked;
                li.classList.toggle('checked', item.checked);
                saveChecklist();
            });
            
            // Delete button handler
            li.querySelector('.delete-item-btn').addEventListener('click', () => {
                checklist = checklist.filter(i => i.id !== item.id);
                saveChecklist();
                renderChecklist();
            });
            
            checklistItems.appendChild(li);
        });
    };

    addItemBtn.addEventListener('click', () => {
        const text = newItemInput.value.trim();
        if (text === '') return;
        
        const newItem = {
            id: Date.now(),
            text: text,
            checked: false
        };
        
        checklist.push(newItem);
        saveChecklist();
        renderChecklist();
        newItemInput.value = '';
    });

    newItemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItemBtn.click();
        }
    });

    resetChecklistBtn.addEventListener('click', () => {
        if (confirm('모든 체크리스트 항목을 기본값으로 초기화하시겠습니까?')) {
            checklist = [...defaultChecklist];
            saveChecklist();
            renderChecklist();
        }
    });

    loadChecklist();


    // ==========================================
    // 9. DYNAMIC TRAVEL BUDGET CALCULATOR
    // ==========================================
    
    const calculateBudget = () => {
        const days = parseInt(calcDays.value) || 1;
        const people = parseInt(calcPeople.value) || 1;
        const flightPerPerson = parseInt(calcFlight.value) || 350000;
        const hotelPerNight = parseInt(calcHotel.value) || 120000;
        const foodPerPersonPerDay = parseInt(calcFood.value) || 8000;
        const shoppingPerPerson = parseInt(calcShopping.value) || 200000;
        
        // Exchange rates: 100 JPY = 900 KRW
        const jpyToKrw = 9.0; 
        
        // Calculations
        const totalFlightCost = flightPerPerson * people;
        
        // Hotel nights = days - 1 (min 1 for budget, or just days-1)
        const nights = Math.max(1, days - 1);
        // Hotel cost is per room, assume 2 people share a room.
        // Rooms needed = ceil(people / 2)
        const roomsNeeded = Math.ceil(people / 2);
        const totalHotelCostJpy = hotelPerNight * nights * roomsNeeded;
        const totalHotelCostKrw = totalHotelCostJpy * jpyToKrw;
        
        const totalFoodCostJpy = foodPerPersonPerDay * days * people;
        const totalFoodCostKrw = totalFoodCostJpy * jpyToKrw;
        
        const totalShoppingCost = shoppingPerPerson * people;
        
        // Grand Totals
        const grandTotalKrw = totalFlightCost + totalHotelCostKrw + totalFoodCostKrw + totalShoppingCost;
        const grandTotalJpy = grandTotalKrw / jpyToKrw;
        
        // Update values in UI
        totalKrw.textContent = grandTotalKrw.toLocaleString('ko-KR') + ' 원';
        totalJpy.textContent = `환산 엔화: ¥${Math.round(grandTotalJpy).toLocaleString('en-US')} (대략)`;
        
        summaryFlight.textContent = totalFlightCost.toLocaleString('ko-KR') + ' 원';
        summaryHotel.textContent = totalHotelCostKrw.toLocaleString('ko-KR') + ' 원';
        summaryFood.textContent = totalFoodCostKrw.toLocaleString('ko-KR') + ' 원';
        summaryShopping.textContent = totalShoppingCost.toLocaleString('ko-KR') + ' 원';
        
        // Calculate chart widths
        const total = Math.max(1, grandTotalKrw);
        const pFlight = (totalFlightCost / total) * 100;
        const pHotel = (totalHotelCostKrw / total) * 100;
        const pFood = (totalFoodCostKrw / total) * 100;
        const pShopping = (totalShoppingCost / total) * 100;
        
        barFlight.style.width = pFlight + '%';
        barHotel.style.width = pHotel + '%';
        barFood.style.width = pFood + '%';
        barShopping.style.width = pShopping + '%';
        
        // Show/hide texts inside bars depending on width to avoid overflow
        barFlight.querySelector('.bar-text').style.display = pFlight > 10 ? 'block' : 'none';
        barHotel.querySelector('.bar-text').style.display = pHotel > 10 ? 'block' : 'none';
        barFood.querySelector('.bar-text').style.display = pFood > 10 ? 'block' : 'none';
        barShopping.querySelector('.bar-text').style.display = pShopping > 10 ? 'block' : 'none';
    };

    // Range input value display updates
    calcFlight.addEventListener('input', (e) => {
        flightVal.textContent = parseInt(e.target.value).toLocaleString('ko-KR') + ' 원';
        calculateBudget();
    });
    
    calcShopping.addEventListener('input', (e) => {
        shoppingVal.textContent = parseInt(e.target.value).toLocaleString('ko-KR') + ' 원';
        calculateBudget();
    });

    // Plus Minus Button Controls
    document.querySelectorAll('.num-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            const input = document.getElementById(targetId);
            const isPlus = e.currentTarget.classList.contains('plus');
            
            let val = parseInt(input.value) || 0;
            const min = parseInt(input.getAttribute('min')) || 1;
            const max = parseInt(input.getAttribute('max')) || 100;
            
            if (isPlus) {
                if (val < max) input.value = val + 1;
            } else {
                if (val > min) input.value = val - 1;
            }
            
            calculateBudget();
        });
    });

    // Add listeners to standard inputs
    [calcDays, calcPeople, calcHotel, calcFood].forEach(element => {
        element.addEventListener('change', calculateBudget);
        element.addEventListener('input', calculateBudget);
    });

    // Trigger Initial calculation
    calculateBudget();


    // ==========================================
    // 10. TRAVEL PHRASES FLIP CARDS ENGINE
    // ==========================================
    
    const renderPhrases = (category) => {
        phraseContainer.innerHTML = '';
        const phrases = phraseData[category] || [];
        
        phrases.forEach(item => {
            const card = document.createElement('div');
            card.className = 'phrase-card';
            
            card.innerHTML = `
                <div class="phrase-card-inner">
                    <div class="phrase-front">
                        <span class="korean">${item.kr}</span>
                        <span class="tip-notice"><i class="fa-solid fa-rotate"></i> 클릭하여 뒤집기</span>
                    </div>
                    <div class="phrase-back">
                        <span class="japanese">${item.jp}</span>
                        <span class="pronun">발음: [ ${item.pronun} ]</span>
                        <span class="meaning">💡 ${item.tip}</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
            
            phraseContainer.appendChild(card);
        });
    };

    // Category button handling for Phrases
    langCatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langCatBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const cat = btn.getAttribute('data-cat');
            renderPhrases(cat);
        });
    });

    // Navigation between Tips Panel and Language Panel
    tabBtnTips.addEventListener('click', () => {
        tabBtnTips.classList.add('active');
        tabBtnLang.classList.remove('active');
        panelTips.classList.remove('hidden');
        panelLang.classList.add('hidden');
    });

    tabBtnLang.addEventListener('click', () => {
        tabBtnLang.classList.add('active');
        tabBtnTips.classList.remove('active');
        panelLang.classList.remove('hidden');
        panelTips.classList.add('hidden');
        // Render initial category
        renderPhrases('common');
    });

    // Load initial common phrases on start
    renderPhrases('common');
});
