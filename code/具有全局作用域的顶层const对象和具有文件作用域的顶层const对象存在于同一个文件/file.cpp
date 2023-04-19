#include <iostream>
using std::cout;
using std::endl;

const int ci = 70;
extern const int ci;

void print()
{
    cout << "In print:\n";
    cout << "ci = " << ci << endl;
}
