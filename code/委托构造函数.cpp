#include <iostream>
#include <string>

using std::cout;
using std::endl;
using std::ostream;
using std::string;

class GamePlayer
{
    friend ostream &operator<< (ostream &os, const GamePlayer &gp);
public:
    GamePlayer(string _name, int _age) : name(_name), age(_age) { cout << "This is constructor1.\n"; } // 受委托构造函数
    GamePlayer(): GamePlayer("", 0) { cout << "This is default constructor.\n"; }
    GamePlayer(string _name) : GamePlayer(_name, 0) { cout << "This is constructor2.\n"; }
private:
    int age;
    string name;
};

ostream &operator<< (ostream &os, const GamePlayer &gp)
{
    if (gp.name == "")
        os << "none";
    else
        os << gp.name;
    os << '\t' << gp.age;
    return os;
}

int main()
{
    GamePlayer gp("Dot", 25);
    cout << gp << endl;
    GamePlayer gp2("Mary");
    cout << gp2 << endl;
    return 0;
}
