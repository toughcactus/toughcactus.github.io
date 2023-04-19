// main
#include <iostream>
#include "file.h"

using std::cout;
using std::endl;


extern const int ci = 7;           // 顶层const：全局作用域


int main()
{
    cout << "In main:\n";
    cout << "ci = " << ci << endl;

    print();
    return 0;
}