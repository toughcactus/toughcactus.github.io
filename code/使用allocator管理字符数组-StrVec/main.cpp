#include <iostream>
#include "strVec.hpp"

allocator<string> StrVec::alloc;

int main(int argc, const char * argv[]) {
    StrVec sv;
    sv.push_back("one");
    std::cout << sv << std::endl;
    
    sv.push_back("two");
    std::cout << sv << std::endl;
    
    sv.push_back("three");
    std::cout << sv << std::endl;

    sv.push_back("four");
    std::cout << sv << std::endl;
    
    sv.push_back("five");
    std::cout << sv << std::endl;
    
    return 0;
}
