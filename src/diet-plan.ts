export interface DailyPlan {
  day: number;
  mealPlan: {
    breakfast: string;
    lunch: string;
    snack: string;
    dinner: string;
  };
}

export interface WeeklyPlan {
  week: number;
  allowedFoods: string[];
  forbiddenFoods: string[];
  checklist: string[];
  dailyPlans: DailyPlan[];
}

export const forbiddenFoods: string[] = [
  "모든 종류의 술",
  "설탕 및 설탕이 들어간 음식 (음료, 과자, 아이스크림 등)",
  "트랜스지방 (라면, 튀김 등)",
  "밀가루 음식 (빵, 파스타 등)",
  "카페인 함유 음료 (2주차부터 하루 1잔 허용)",
  "삼겹살, 갈비, 곱창 등 고포화지방 음식",
];

export const dietPlan: WeeklyPlan[] = [
  {
    week: 1,
    allowedFoods: [
      "녹황색 채소",
      "두부",
      "코코넛 오일",
      "올리브 오일",
      "무가당 플레인 요거트",
      "생선",
      "해산물",
      "껍질 벗긴 닭고기",
      "달걀",
      "버섯",
      "해조류",
      "허용된 양념류 (양파, 마늘, 고춧가루, 식초, 후추 등)",
      "허용된 오일류 (코코넛, 올리브, 아보카도, 냉압착 들기름)",
      "녹차, 허브티",
      "지방없는 고기",
    ],
    forbiddenFoods: forbiddenFoods,
    checklist: [
      "하루 8컵 이상의 물 마시기(2L 이상)",
      "유산균, 종합비타민, 오메가3 등 영양제 챙겨 먹기",
      "하루 7시간 이상 수면(자정 - 오전4시 사이에 자는 것이 이상적)",
      "저녁 식사는 잠들기 4시간 전에 마치고 12~14시간 공복 유지",
      "주 4회 이상 유산소 운동 (30분 이상)",
    ],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "단백질 셰이크",
          snack: "단백질 셰이크",
          dinner: "단백질 셰이크",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "단백질 셰이크",
          snack: "단백질 셰이크",
          dinner: "단백질 셰이크",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "단백질 셰이크",
          snack: "단백질 셰이크",
          dinner: "단백질 셰이크",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch:
            "현미잡곡밥 1/2공기 또는 흰쌀밥 1/3공기와 채소, 해조류, 버섯, 단백질 위주의 반찬",
          snack: "단백질 셰이크",
          dinner: "단백질 셰이크",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch:
            "현미잡곡밥 1/2공기 또는 흰쌀밥 1/3공기와 채소, 해조류, 버섯, 단백질 위주의 반찬",
          snack: "단백질 셰이크",
          dinner: "단백질 셰이크",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch:
            "현미잡곡밥 1/2공기 또는 흰쌀밥 1/3공기와 채소, 해조류, 버섯, 단백질 위주의 반찬",
          snack: "단백질 셰이크",
          dinner: "단백질 셰이크",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch:
            "현미잡곡밥 1/2공기 또는 흰쌀밥 1/3공기와 채소, 해조류, 버섯, 단백질 위주의 반찬",
          snack: "단백질 셰이크",
          dinner: "단백질 셰이크",
        },
      },
    ],
  },
  {
    week: 2,
    allowedFoods: ["1주차 모든 허용 음식", "콩류", "견과류 (한 줌)"],
    forbiddenFoods: forbiddenFoods,
    checklist: [
      "주 1회 24시간 단식",
      "하루 8컵 이상의 물 마시기(2L 이상)",
      "유산균, 종합비타민, 오메가3 등 영양제 챙겨 먹기",
      "하루 7시간 이상 수면(자정 - 오전4시 사이에 자는 것이 이상적)",
      "저녁 식사는 잠들기 4시간 전에 마치고 12~14시간 공복 유지",
      "주 4회 이상 유산소 운동 (30분 이상)",
    ],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "24시간 단식",
          lunch: "24시간 단식",
          snack: "24시간 단식",
          dinner: "24시간 단식",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
    ],
  },
  {
    week: 3,
    allowedFoods: [
      "2주차 모든 허용 음식",
      "고구마",
      "단호박",
      "바나나",
      "토마토",
      "밤",
      "베리류 과일",
    ],
    forbiddenFoods: forbiddenFoods,
    checklist: [
      "주 2회 24시간 단식 (연달아 하지 않기)",
      "하루 8컵 이상의 물 마시기(2L 이상)",
      "유산균, 종합비타민, 오메가3 등 영양제 챙겨 먹기",
      "하루 7시간 이상 수면(자정 - 오전4시 사이에 자는 것이 이상적)",
      "저녁 식사는 잠들기 4시간 전에 마치고 12~14시간 공복 유지",
      "주 4회 이상 유산소 운동 (30분 이상)",
    ],

    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "24시간 단식",
          lunch: "24시간 단식",
          snack: "24시간 단식",
          dinner: "24시간 단식",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "24시간 단식",
          lunch: "24시간 단식",
          snack: "24시간 단식",
          dinner: "24시간 단식",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "단백질 셰이크",
          lunch: "저탄수화물 식단",
          snack: "단백질 셰이크",
          dinner: "밥 없이 채소, 해조류, 버섯, 단백질 충분히 섭취",
        },
      },
    ],
  },
  {
    week: 4,
    allowedFoods: [
      "3주차 모든 허용 음식",
      "통곡물 (현미, 퀴노아 등)",
      "다양한 채소와 과일 섭취 권장",
    ],
    forbiddenFoods: forbiddenFoods,
    checklist: ["건강한 식습관 유지", "꾸준한 운동"],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "자유식",
          lunch: "균형잡힌 식사",
          snack: "단백질 셰이크",
          dinner: "균형잡힌 식사",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "자유식",
          lunch: "균형잡힌 식사",
          snack: "단백질 셰이크",
          dinner: "균형잡힌 식사",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "자유식",
          lunch: "균형잡힌 식사",
          snack: "단백질 셰이크",
          dinner: "균형잡힌 식사",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "자유식",
          lunch: "균형잡힌 식사",
          snack: "단백질 셰이크",
          dinner: "균형잡힌 식사",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "자유식",
          lunch: "균형잡힌 식사",
          snack: "단백질 셰이크",
          dinner: "균형잡힌 식사",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "자유식",
          lunch: "균형잡힌 식사",
          snack: "단백질 셰이크",
          dinner: "균형잡힌 식사",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "자유식",
          lunch: "균형잡힌 식사",
          snack: "단백질 셰이크",
          dinner: "균형잡힌 식사",
        },
      },
    ],
  },
];
