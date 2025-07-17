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
  checklist: string[];
  dailyPlans: DailyPlan[];
}

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
    ],
    checklist: [
      "Drink 2L of water",
      "Take supplements",
      "sleep 7 hours in a day",
      "sleep between 12 - 4am",
    ],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Protein Shake",
          snack: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Protein Shake",
          snack: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Protein Shake",
          snack: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          snack: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          snack: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          snack: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          snack: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
    ],
  },
  {
    week: 2,
    allowedFoods: ["1주차 모든 허용 음식", "콩류", "견과류 (한 줌)"],
    checklist: ["Drink 2.5L of water", "Workout for 30 mins"],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "Scrambled Eggs",
          lunch: "Grilled Chicken Salad",
          snack: "Protein Shake",
          dinner: "Baked Salmon with Asparagus",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Avocado Toast",
          lunch: "Tuna Salad",
          snack: "Protein Shake",
          dinner: "Beef Stir-fry",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Greek Yogurt with Berries",
          lunch: "Leftover Beef Stir-fry",
          snack: "Protein Shake",
          dinner: "Chicken and Veggie Skewers",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Omelette with Spinach and Feta",
          lunch: "Chicken and Veggie Skewers",
          snack: "Protein Shake",
          dinner: "Pork Chops with Roasted Brussels Sprouts",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Smoothie with Protein Powder",
          lunch: "Pork Chops with Roasted Brussels Sprouts",
          snack: "Protein Shake",
          dinner: "Shrimp Scampi with Zucchini Noodles",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Cottage Cheese with Nuts and Seeds",
          lunch: "Shrimp Scampi with Zucchini Noodles",
          snack: "Protein Shake",
          dinner: "Steak with a Side Salad",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "Boiled Eggs",
          lunch: "Steak with a Side Salad",
          snack: "Protein Shake",
          dinner: "Free Meal",
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
    checklist: ["Drink 3L of water", "45-minute run"],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "Oatmeal with Fruits",
          lunch: "Quinoa Salad with Black Beans",
          snack: "Protein Shake",
          dinner: "Grilled Chicken with Sweet Potato",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Fruit Smoothie",
          lunch: "Leftover Chicken and Sweet Potato",
          snack: "Protein Shake",
          dinner: "Brown Rice with Steamed Vegetables",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Yogurt with Granola",
          lunch: "Brown Rice and Vegetables",
          snack: "Protein Shake",
          dinner: "Fish Tacos with Cabbage Slaw",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Scrambled Eggs with Whole Wheat Toast",
          lunch: "Fish Tacos",
          snack: "Protein Shake",
          dinner: "Pasta with Marinara Sauce and Lean Ground Turkey",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Pancakes with Berries",
          lunch: "Pasta with Marinara",
          snack: "Protein Shake",
          dinner: "Chicken Fajitas with Bell Peppers and Onions",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Cereal with Milk",
          lunch: "Chicken Fajitas",
          snack: "Protein Shake",
          dinner: "Homemade Pizza on Whole Wheat Crust",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "French Toast",
          lunch: "Homemade Pizza",
          snack: "Protein Shake",
          dinner: "Cheat Meal",
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
    checklist: ["Maintain water intake", "Stay active"],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          snack: "Protein Shake",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          snack: "Protein Shake",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          snack: "Protein Shake",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          snack: "Protein Shake",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          snack: "Protein Shake",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          snack: "Protein Shake",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          snack: "Protein Shake",
          dinner: "Balanced Meal",
        },
      },
    ],
  },
];
