#include <iostream>
#include <string>
#include <vector>
#include <set>
#include <unordered_map>
using namespace std;

class Solution
{
  public:
    unordered_map<int, bool> integer_map;
    unordered_map<int, bool>::iterator map_itr;
    vector<int> selfDividingNumbers(int left, int right)
    {
        vector<int> nums;
        int nums_length = right - left + 1;
        for (int i = left; i <= right; i++)
        {
            if (checkDivisibility(i))
            {
                nums.push_back(i);
                integer_map.insert({i, true});
            }
        }

        return nums;
    }

  private:
    bool checkDivisibility(int number)
    {
        string n = std::to_string(number);
        if (n.find("0") != string::npos)
        {
            return false;
        }

        int rem = 0;
        int num = number;
        while (num != 0)
        {
            map_itr = integer_map.find(num);
            if (map_itr != integer_map.end() && number % num == 0)
            {
                return map_itr->second;
            }
            else
            {
                rem = num % 10;
                if (number % rem != 0)
                {
                    return false;
                }
                num = num / 10;
            }
        }

        return true;
    }
};

int main()
{
    Solution obj = Solution();
    int left = 1;
    int right = 22;
    vector<int> result = obj.selfDividingNumbers(left, right);
    vector<int>::iterator itr = result.begin();
    while (itr != result.end())
    {
        cout << *itr << " ";
        itr++;
    }
    return 0;
}