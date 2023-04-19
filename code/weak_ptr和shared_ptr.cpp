#include <iostream>
#include <memory>

int main() {
    auto sp = std::make_shared<int>(1);
    std::weak_ptr<int> wp(sp); // wp弱共享sp，sp的引用计数未改变

    if (std::shared_ptr<int> sp2 = wp.lock())
    {
        *sp2 = 3; // 通过sp2访问动态对象
    }

    std::cout << *sp << std::endl;
    return 0;
}
