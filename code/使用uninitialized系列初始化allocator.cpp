#include <iostream>
#include <vector>
#include <memory>

void Print_Allocator_Int(int *b, int *e) {
    for (auto i = b; i != e; i++)
        std:: cout << *i << "\t";
    std::cout << std::endl;
}

int main() {
    std::vector<int> ivec{0, 1, 2, 3, 4, 5};
    std::vector<int> ivec2{10, 11, 12, 13, 14, 15};
    std::allocator<int> alloc;
    auto begin = alloc.allocate(ivec.size() * 5), cur = begin;
    
    alloc.construct(cur++, 100);

    cur = std::uninitialized_copy(ivec.begin(), ivec.end(), cur);
    Print_Allocator_Int(begin, cur);

    auto save = cur;
    cur = std::uninitialized_copy_n(ivec2.begin(), 5, cur);
    Print_Allocator_Int(begin, cur);
    
    std::uninitialized_fill(save, ++cur, 100);
    Print_Allocator_Int(begin, cur);
  
    cur = std::uninitialized_fill_n(save, cur - save + 1, 200);
    Print_Allocator_Int(begin, cur);
  
    return 0;
}
