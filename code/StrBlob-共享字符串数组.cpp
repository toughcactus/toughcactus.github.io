#include <iostream>
#include <vector>
#include <string>
#include <initializer_list>
#include <memory>

using std::cout;
using std::endl;
using std::initializer_list;
using std::make_shared;
using std::ostream;
using std::shared_ptr;
using std::string;
using std::vector;

class StrBlob
{
  friend ostream &operator<<(ostream &os, const StrBlob &sb);
public:
  typedef std::vector<std::string>::size_type size_type;
  StrBlob();
  StrBlob(std::initializer_list<std::string> il);
// 使用合成的拷贝构造函数和拷贝赋值运算符
  size_type size() const { return data->size(); }
  bool empty() const { return data->empty(); }
  void push_back(const string &t) { data->push_back(t); }
  void pop_back();
  string &front();
  string &back();
private:
  shared_ptr<vector<string>> data;
  void check(size_type i, const string &msg) const;
};

// 创建一个StrBlob对象，为data申请内存
StrBlob::StrBlob() : data(make_shared<vector<string>>()) { }

// 创建一个StrBlob对象，为data申请内存并初始化
StrBlob::StrBlob(initializer_list<string> il): data(make_shared<vector<string>>(il)) { }

// 检查给定位置的有效性
void StrBlob::check(size_type i, const string &msg) const
{
  if (i >= data->size())
    throw std::out_of_range(msg);
}

// 若容器不空，返回首元素或者尾元素，删除尾元素
string& StrBlob::front()
{
  check(0, "front on empty StrBlob");
  return data->front();
}
string& StrBlob::back()
{
  check(0, "back on empty StrBlob");
  return data->back();
}
void StrBlob::pop_back()
{
  check(0, "pop_back on empty StrBlob");
  data->pop_back();
}

ostream &operator<<(ostream &os, const StrBlob &sb)
{
  for (const string &s : *(sb.data))
    os << s << "\t";
  return os;
}

int main()
{
  StrBlob sb{"Hat", "Shoe"}, sb2 = sb;
  cout << sb2 << endl;
}
