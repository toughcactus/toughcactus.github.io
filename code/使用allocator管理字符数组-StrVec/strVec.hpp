#ifndef strVec_hpp
#define strVec_hpp

#include <stdio.h>
#include <memory>
#include <string>
#include <utility>
#include <iostream>

using std::string;
using std::allocator;
using std::pair;

class StrVec
{
    friend std::ostream &operator<<(std::ostream &os, const StrVec &sv);
public:
    StrVec() : elements(nullptr), first_free(nullptr), cap(nullptr) {}
    ~StrVec();

    StrVec(const StrVec&);
    StrVec &operator=(const StrVec&);

    StrVec(StrVec &&) noexcept;
    StrVec &operator=(StrVec &&) noexcept;

    void push_back(const string&);

    size_t size() const { return first_free - elements; }

    size_t capacity() const { return cap - elements; }

    string *begin() const { return elements; }

    string *end() const { return first_free; }

private:
    
    static allocator<string> alloc;
    
    void chk_n_alloc() { if (size() == capacity()) reallocate(); }
    
    pair<string*, string*> alloc_n_copy(const string *, const string *); // 使用迭代器范围初始化动态内存
    
    void free();
    void reallocate();
    
    string *elements;
    string *first_free;
    string *cap;
};
#endif
