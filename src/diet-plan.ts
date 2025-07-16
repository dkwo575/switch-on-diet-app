export interface DailyPlan {
  day: number;
  mealPlan: {
    breakfast: string;
    lunch: string;
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
      "Protein Shake",
      "Chicken Breast",
      "Fish",
      "Tofu",
      "Vegetables",
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
          dinner: "Protein Shake",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Protein Shake",
          dinner: "Protein Shake",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          dinner: "Protein Shake",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          dinner: "Protein Shake",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          dinner: "Protein Shake",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "Protein Shake",
          lunch: "Low-carb meal",
          dinner: "Protein Shake",
        },
      },
    ],
  },
  {
    week: 2,
    allowedFoods: ["Eggs", "Avocado", "Nuts", "Seeds", "Berries"],
    checklist: ["Drink 2.5L of water", "Workout for 30 mins"],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "Scrambled Eggs",
          lunch: "Grilled Chicken Salad",
          dinner: "Baked Salmon with Asparagus",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Avocado Toast",
          lunch: "Tuna Salad",
          dinner: "Beef Stir-fry",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Greek Yogurt with Berries",
          lunch: "Leftover Beef Stir-fry",
          dinner: "Chicken and Veggie Skewers",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Omelette with Spinach and Feta",
          lunch: "Chicken and Veggie Skewers",
          dinner: "Pork Chops with Roasted Brussels Sprouts",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Smoothie with Protein Powder",
          lunch: "Pork Chops with Roasted Brussels Sprouts",
          dinner: "Shrimp Scampi with Zucchini Noodles",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Cottage Cheese with Nuts and Seeds",
          lunch: "Shrimp Scampi with Zucchini Noodles",
          dinner: "Steak with a Side Salad",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "Boiled Eggs",
          lunch: "Steak with a Side Salad",
          dinner: "Free Meal",
        },
      },
    ],
  },
  {
    week: 3,
    allowedFoods: ["Quinoa", "Brown Rice", "Sweet Potatoes", "Fruits"],
    checklist: ["Drink 3L of water", "45-minute run"],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "Oatmeal with Fruits",
          lunch: "Quinoa Salad with Black Beans",
          dinner: "Grilled Chicken with Sweet Potato",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Fruit Smoothie",
          lunch: "Leftover Chicken and Sweet Potato",
          dinner: "Brown Rice with Steamed Vegetables",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Yogurt with Granola",
          lunch: "Brown Rice and Vegetables",
          dinner: "Fish Tacos with Cabbage Slaw",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Scrambled Eggs with Whole Wheat Toast",
          lunch: "Fish Tacos",
          dinner: "Pasta with Marinara Sauce and Lean Ground Turkey",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Pancakes with Berries",
          lunch: "Pasta with Marinara",
          dinner: "Chicken Fajitas with Bell Peppers and Onions",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Cereal with Milk",
          lunch: "Chicken Fajitas",
          dinner: "Homemade Pizza on Whole Wheat Crust",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "French Toast",
          lunch: "Homemade Pizza",
          dinner: "Cheat Meal",
        },
      },
    ],
  },
  {
    week: 4,
    allowedFoods: ["All previous foods", "Whole grains", "Legumes"],
    checklist: ["Maintain water intake", "Stay active"],
    dailyPlans: [
      {
        day: 1,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 2,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 3,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 4,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 5,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 6,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          dinner: "Balanced Meal",
        },
      },
      {
        day: 7,
        mealPlan: {
          breakfast: "Anything you like",
          lunch: "Balanced Meal",
          dinner: "Balanced Meal",
        },
      },
    ],
  },
];
