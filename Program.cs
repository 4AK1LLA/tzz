const int COLOR_RED = 0;
const int COLOR_GREEN = 1;
const int COLOR_BLUE = 2;

int[] population = new int[3];
population[COLOR_RED] = 3;
population[COLOR_GREEN] = 0;
population[COLOR_BLUE] = 6;

Console.WriteLine(CalculateMeetings(population, COLOR_GREEN));

int CalculateMeetings(int[] population, int color)
{
    if (population.Count(x => x == 0) >= 2)
    {
        return -1;
    }

    int steps = 0;

    while (true)
    {
        int indexOfZero = Array.IndexOf(population, 0);

        if (indexOfZero != -1 && indexOfZero != color)
        {
            // check if secondary colors have 0 and 1 so next combinations are impossible
            for (int i = 0; i < population.Length; i++)
            {
                if (population[i] == 1 && i != color && i != indexOfZero)
                {
                    return -1;
                }
            }

            // extra step to avoid 0 in secondary colors
            CombineColors(population, indexOfZero);
        } 
        else
        {
            CombineColors(population, color);
        }

        steps++;

        if (population.Count(x => x == 0) == 2 && population[color] >= 2)
        {
            break;
        }
    }

    return steps;
}

void CombineColors(int[] population, int color)
{
    for (int i = 0; i < population.Length; i++)
    {
        population[i] = i == color ? population[i] + 2 : population[i] - 1;

        if (population[i] < 0)
        {
            throw new Exception("Population value cannot be negative");
        }
    }
}