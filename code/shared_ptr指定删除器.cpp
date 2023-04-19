#include <iostream>
#include <ostream>
#include <string>
#include <vector>
#include <memory>

using std::cout;
using std::endl;
using std::string;

class Foo
{
  friend std::ostream &operator<<(std::ostream &os, const Foo &f);  
public:
  Foo(string _name): name(_name) {}
  ~Foo() { cout << "Call ~Foo for " << *this << endl; }
private:
  string name;
};

std::ostream &operator<<(std::ostream &os, const Foo &f)
{
  os << f.name;
  return os;
}

void DeleteFoo(Foo *f)
{
  cout << "call " << __FUNCTION__ << " for " << *f << endl;
  delete f; // 调用~Foo()
}

int main(int argc, const char * argv[]) {
  Foo f("Kate");
  auto p = new Foo("Peter");
  std::shared_ptr<Foo> f2(p, DeleteFoo);
  f2 = nullptr;
  cout << "main finished.\n";
  return 0;
} // main函数结束才销毁Kate
