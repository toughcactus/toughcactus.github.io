#include <iostream>
#include <string>
#include <vector>
#include <memory>

using std::cout;
using std::endl;
using std::string;

void DeleteString(string *ps) {
    if (ps) {
        cout << "Delete " << *ps << endl;
        delete ps;
    }
}
  
void DeleteString1(string *ps)
{
    cout << "This is " << __FUNCTION__ << endl;
    DeleteString(ps);
}

void DeleteString2(string *ps)
{
    cout << "This is " << __FUNCTION__ << endl;
    DeleteString(ps);
}

int main(int argc, const char * argv[]) {
    auto p = new string("Hat");
    auto p2 = new string("Shoe");
    std::shared_ptr<string> sp(p, DeleteString1);
    sp.reset(p2, DeleteString2);
    cout << "main finished.\n";
    return 0;
}
