#include <iostream>
#include <string>

using namespace std;
class Solution
{
  public:
    bool judgeCircle(string moves)
    {
        int len = moves.length();
        int x = 0;
        int y = 0;
        char c;
        for(int i = 0; i<len; i++){
            c = moves.at(i);
            if(c == 'U'){
                y++;
            }
            else if(c == 'D'){
                y--;
            }
            else if(c == 'L'){
                x--;
            }
            else if(c == 'R'){
                x++;
            }
        }

        if(x == 0 && y==0){
            return true;
        }
        else{
            return false;
        }
    }
};

int main()
{
    Solution obj = Solution();
    string moves = "UDLRL";
    bool result = obj.judgeCircle(moves);
    cout << result << endl;
    return 0;
}