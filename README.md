# Phần 1: Ôn tập C++

### Bài 1: Các nguyên lý của công nghệ phần mềm

1. Trừu tượng (Abstract): Loại bỏ các thành phần mang tính chi tiết định nghĩa một vấn đề nào đó
2. Module hóa (Modularity): Hạn chế độ phức tạp bằng cách phân chia ra nhiều phần (Chia để trị)
   - Phân chia bài toán thành các module nhỏ, thực hiện giải quyết từng module
   - Kết hợp các module
3. Che dấu thông tin (Information hiding)
   - Theo nguyên lý trừu tượng
   - Không cho phép truy nhập từ bên ngoài

### Bài 2: Cơ bản về ngôn ngữ lập trình C++

- Được phát triển dựa trên ngôn ngữ lập trình C
- C++ có một số mở rộng so với ngôn ngữ C như sau:
  - Khi nhập và xuất dữ liệu không phải xử dụng các định dạng (%d, %f, ...)
  - Hàm có đối mặc định và hàm có đối tham chiếu
    - Hàm có đối mặc định nghĩa là nếu trong lời gọi hàm mà không truyền giá trị cho tham số thì nó sẽ nhận giá trị mặc định
    - Hàm có đối tham chiếu
    - Nạp chồng hàm
    - Hàm mấu
    - Lớp

```CPP
#include<iostream>
using namespace std;

int main() {
	char ho_ten[50];
	char w[10];
	cin.ignore(1);
	cin.get(ho_ten, 50);
	cout << ho_ten << endl;
	cin.ignore(1);
	cin.get(w, 5);
	cout << w;
	return 0;
}
```

```CPP
tran tuan dat
ran tuan dat
hello men
hell
```

### Bài 3: Con trỏ

```cpp
int *p; // Khai báo con trỏ có tên là p và kiểu dữ liệu là int
p = new int; // Cấp phát bộ nhớ cho con trỏ p
*p = 100; // Gán giá trị 100 cho biến con trỏ p
cout << p; // In ra địa chỉ tại con trỏ p
cout << *p; // In ra giá trị tại địa chỉ của con trỏ p
delete p; // Thu hồi bộ nhớ, Nếu không thu hồi bộ nhớ thì sẽ bị memory leak
```

### Bài 4: Các toán tử trong con trỏ

- Có hai toán tử trong con trỏ là \* và &

  - Toán tử `&` là toán tử một ngôi mà trả về địa chỉ ô nhớ của toán hạng của nó (Toán tử một ngôi chỉ yêu cầu toán hạng)
  - Một biến con trỏ chỉ lưu trữ địa chỉ của một biến khác

- Ví dụ:

```cpp
int count;
int *m;
m = &count;
```

=> Lệnh `m = &count` đặt địa chỉ ô nhớ của biến count vào con trỏ m. Lệnh trên có thể phát biếu là `con trỏ m nhận địa chỉ của biến count`

- Toán tử con trỏ `*` là toán tử một ngôi trả về giá trị tại địa chỉ con trỏ trỏ đến
- Ví dụ: q = \*m

=> Lấy giá trị tại thanh địa chỉ mà m trỏ đến và đặt vào biến q. Như vậy q sẽ có giá trị là 100 (Là giá trị của biến count)

```cpp
#include<iostream>

using namespace std;

int main() {
	int count = 100;
	int *m = &count;
	cout << "Dia chi cua bien count: " << &count << endl;
	cout << "Gia tri cua bien count: " << count << endl;
	cout << "Dia chi cua con tro m: " << m << endl;
	cout << "Gia tri cua con tro m dang tro toi: " << *m << endl;

	int p = *m;
	cout << "Gia tri cua p: " << p << enld;
	int *x = m;
	cout << "Dia chi cua con tro x: " << x << endl;
	cout << "Gia tri cua con tro x dang tro toi: " << *x << endl;
	*x = 15;
	cout << "Gia tri cua con tro m dang tro toi: " << *m << enld;
	cout << "Gia tri cua bien count: " << count << endl;
	return 0;
}
```

### Con trỏ void và con trỏ null

1. Đặt vấn đề

- Lưu ý: Kiểu dữ liệu khi khai báo biến con trỏ chính là kiểu dữ liệu mà con trỏ có thể trỏ đến. Địa chỉ đặt vào biến con trỏ phải có cùng kiểu với kiểu con trỏ. Xem xét đoạn mã sau

```cpp
// Ta Có:
int a;
float f;
int *pa;
float *pf;
// Những lệnh sau là hợp lệ:
pa = &a;
pf = &f;
// Những lệnh sau là không hợp lệ:
pa = &f;    // pa là con trỏ có kiểu dữ liệu là int, do đó nó chỉ chứa địa chỉ của biến có kiểu là int
pf = &a;    // pf là con trỏ có kiểu dữ liệu là float, do đó nó chỉ chứa địa chỉ của biến có kiểu là float
```

2. Con trỏ void

- Con trỏ void là loại con trỏ đặc biệt mà có thể trỏ đến bất kì kiểu dữ liệu nào

```cpp
// Cú pháp khai báo
void *pointerVariable;
// VD
// Nếu khai báo con trỏ void sau:
void *p;
// Thì các lệnh sau đây là hợp lệ
p = &a; // Sau lệnh này, p trỏ đến biến nguyên a;
p = &f; // Sau lệnh này, p trỏ đến biến thực f
```

- Tuy nhiên, tùy thuộc con trỏ void đang trỏ đến kiểu dữ liệu nào, ta phải ép kiểu về đúng kiểu tương ứng khi dùng trong các biểu thức.
- Ví dụ p đang trỏ đến biến nguyên a, để tăng giá trị của biến a lên 10, ta phải dùng lệnh sau: `(*(int*)p) + 10`;
- Nếu p đang trỏ đến biến thực f, để tăng giá trị của biến f lên 10 ta phải dùng lệnh sau: (float*)*p + 10

```cpp
#include<iostream>

using namespace std;

int main() {
	int a = 10;
	float f = 2.5;
	int *pa = &a;
	float *pf = &f;

	*pa = 20;
	cout << a << endl; // 20

	void *p;
	p = &f;
	*(float*)p = 5.5;
	cout << f << endl;
	// Như dưới đây sẽ gặp lỗi
	int *y;
	cout << "gia tri cua y la: " << *y << enld; // Lỗi vì chưa cấp phát ô nhớ cho biến con trỏ y
    // Fix
    y = new int;
	return 0;
}
```

### Con trỏ và mảng

```cpp
#include<iostream>

using namespace std;

int main() {
	int a[] = {1, 2, 23, 34, 5, 26, 37, 8};
	int *p = a;
	for(int i = 0; i < 8; i++) {
		cout << *(p + i) << "\t";
	}
	cout << "\n------------------------------" << endl;
	for(int i = 0; i < 8; i++) {
		cout << p[i] << "\t";
	}
 	return 0;
}
```

### Mảng con trỏ

- Mỗi biến con trỏ là một biến đơn, ta có thể tạo mảng các con trỏ, Mỗi phần tử của mảng là một con trỏ thông thường. Cú pháp để khai báo mảng con trỏ là: `type *pointerArray[elements]` trong đó:
  - type: Kiểu dữ liệu mà các phần tử con trỏ trỏ đến
  - pointerArray: tên mảng con trỏ
  - elements: Số phần tử của mảng con trỏ

2. Con trỏ null

- Một con trỏ hiện hành không trỏ đến một địa chỉ bộ nhớ hợp lệ thì được gán giá trị NULL, bởi quy ước, con trỏ NULL là con trỏ không trỏ đến đâu cả và không nên dùng
- Nếu chương trình vô tình dùng con trỏ NULL thì sẽ nhận lỗi như dưới đây khi thực thi chương trình (run time error)

```cpp
int *p;
cout << "Giá trị con trỏ trỏ đến là: " << *p;
```

### Tương quan giữa mảng hai chiều và con trỏ cấp 2

```cpp
#include<iostream>

using namespace std;

int main() {
	int **p = new int *[5];
	for(int i = 0; i < 5; i++) {
		p[i] = new int[7];	//  *(p + i) = new int[7];
	}

	for(int i = 0; i < 5; i++) {
		for(int j = 0; j < 7; j++) {
			p[i][j] = i + j;	// *(*(p + i) + j) = i + j;
		}
	}

	for(int i = 0; i < 5; i++) {
		for(int j = 0; j < 7; j++) {
			cout << p[i][j] << "\t";
//			cout << *(*(p+i) + j) << "\t";
		}
		cout << "\n";
	}

	// huy bo nho
	for(int i = 0; i < 5; i++) {
		delete p[i];
	}
	delete p;
 	return 0;
}
```

### Bài tập rèn luyện 1

- Viết hàm hoán vị hai biến thực a, b bằng cách sử dụng con trỏ (Đối vào là hai con trỏ). Viết chương trình chính nhập hai giá trị a, b. Sử dụng hàm trên để hoán đổi vị trí a, b

- Cách 1: Chỉ dùng tham chiếu

```cpp
#include<iostream>

using namespace std;

void swap(int &a, int &b) {
	int tmp = a;
	a = b;
	b = tmp;
}

int main() {
	int a = 5;
	int b = 10;
	swap(a, b);
	cout << a << b;
 	return 0;
}
```

- Cách 2: Dùng con trỏ

```cpp
#include<iostream>

using namespace std;

void swap(int *&a, int *&b) {
	int tmp = *a;
	*a = *b;
	*b = tmp;
}

int main() {
	int a = 5;
	int b = 10;
	swap(a, b);
	cout << a << "\t" << b ;
 	return 0;
}
```

- Cách 3:

```cpp
#include<iostream>

using namespace std;

void swap(int *a, int *b) {
	int tmp = *a;
	*a = *b;
	*b = tmp;
}

int main() {
	int a = 5;
	int b = 10;
	swap(&a, &b);
	cout << a << "\t" << b ;
 	return 0;
}
```

### Bài tập rèn luyện 2

- Viết chương trình nhập vào một mảng a gồm n phần tử nguyên ngẫu nhiên [0, ... 100]. Sắp xếp mảng theo chiều giảm dần (Lưu ý sử dụng tên mảng như con trỏ và sử dụng con trỏ)

```cpp
#include<iostream>
#include<time.h>
#include<stdlib.h>

using namespace std;

//Khai bao protocol
void NhapMang(int *&a, int n);
void XuatMang(int *a, int n);
void SapGiam(int *&a, int n);
void Swap(int *&a, int *&b);

int main() {
	int *a;
	int n = 10;
	NhapMang(a, n);
	SapGiam(a, n);
	XuatMang(a, n);
 	return 0;
}

void NhapMang(int *&a, int n) {
	srand(time(NULL));
	a = new int[n];
	for(int i = 0; i < n; i++) {
		*(a + i) = rand() % 101;
	}
}

void XuatMang(int *a, int n) {
	for(int i = 0; i < n; i++) {
		cout << *(a + i) << "\t";
	}
}

void Swap(int *&a, int *&b) {
	int tmp = *a;
	*a = *b;
	*b = tmp;
}

void SapGiam(int *&a, int n) {
	for(int i = 0; i < n - 1; i++) {
		for(int j = i + 1; j < n; j++) {
			if(*(a + i) < *(a + j)) {
				int *a1 = a + i;
				int *a2 = a + j;
				Swap(a1, a2);
			}
		}
	}
}
```

### Bài rèn luyện 3

- Hãy viết hàm để nhập, xuất vào một ma trận vuông cấp n với các số ngấu nhiên [-50, 100] và hàm tìm phần tử max của ma trận này (Dùng con trỏ thay thế cho mảng hai chiều)

```cpp
#include<iostream>
#include<time.h>
#include<stdlib.h>

using namespace std;

//Khai bao protocol
void nhapMaTran(int **&a, int n);
void xuatMaTran(int **a, int n);
int TimMax(int **&a, int n);

int main() {
	int **a;
	int n = 5;
	nhapMaTran(a, n);
	xuatMaTran(a, n);
	int max = TimMax(a, n);
	cout << "Max: " << max;
 	return 0;
}

void nhapMaTran(int **&a, int n) {
	srand(time(NULL));
	a = new int*[n];
	for(int i = 0; i < n; i++) {
		*(a + i) = new int;
	}
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			*(*(a + i) + j) = -50 + rand() % 151;
		}
	}
}

int TimMax(int **&a, int n) {
	int max = **a;
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			if(*(*(a + i) + j) > max) {
				max = *(*(a + i) + j);
			}
		}
	}
	return max;
}

void xuatMaTran(int **a, int n) {
	for(int i = 0; i < n; i++) {
		for(int j = 0; j < n; j++) {
			cout << *(*(a + i) + j) << "\t";
		}
		cout << "\n";
	}
}
```

### Bài tập rèn luyện 5

- Dùng con trỏ để khai báo mảng một chiều, thực hiện các chức năng sau:
  - Viết hàm cấp phát bộ nhớ cho mảng có n phần tử
  - Viết hàm nhập dữ liệu cho mảng từ bàn phím
  - Viết hàm xuất mảng ra màn hình
  - Viết hàm trả ra một mảng con trỏ có tối đa 3 số lớn nhất trong dãy gốc

```cpp
#include<iostream>
#include<time.h>
#include<stdlib.h>

using namespace std;

//Khai bao protocol
int * capPhatBoNho(int n);
void nhapMang(int *&a, int n);
void xuatMang(int *&a, int n);
int * danhSachMax(int *a, int n);
void SapGiam(int *&a, int n);


int main() {
	int *a = capPhatBoNho(5);
	nhapMang(a, 5);
	xuatMang(a, 5);
	int *pX = danhSachMax(a, 5);
	cout << "\n3 phan tu lon nhat: \n";
	xuatMang(pX, 3);
 	return 0;
}

int * capPhatBoNho(int n) {
	int *a = new int[n];
	return a;
}
void nhapMang(int *&a, int n) {
	for(int i = 0; i < n; i++) {
		cout << "Nhap phan tu thu " << i << ": ";
		cin >> *(a + i);
	}
}
void xuatMang(int *&a, int n) {
	for(int i = 0; i < n; i++) {
		cout << *(a + i) << "\t";
	}
}
int * danhSachMax(int *a, int n) {
	int m = n > 3? 3: n;
	int *pX = capPhatBoNho(m);
	SapGiam(a, n);
	for(int i = 0; i < m; i++) {
		*(pX + i) = *(a + i);
	}
	return pX;

}
void Swap(int *&a, int *&b) {
	int tmp = *a;
	*a = *b;
	*b = tmp;
}

void SapGiam(int *&a, int n) {
	for(int i = 0; i < n - 1; i++) {
		for(int j = i + 1; j < n; j++) {
			if(*(a + i) < *(a + j)) {
				int *a1 = a + i;
				int *a2 = a + j;
				Swap(a1, a2);
			}
		}
	}
}
```

# Cấu trúc dữ liệu và giải thuật

# Mục lục (Road map studing)

### Độ phức tạp thuật toán (big O)

### Sắp xếp và tìm kiếm nhị phân

### Các phương pháp sinh

### Đệ quy, quay lui

### Cấu trúc dữ liệu stack, queue, dequeue

### Quy hoạch động

### Đồ thị

### Độ phức tạp thuật toán

### 1. Đệ quy

- Một hàm được gọi là đệ quy nếu một lệnh trong thân hàm gọi đến chính hàm đó
- Đệ quy giúp giải quyết bài toán theo cách nghĩ thông thường theo một cách tự nhiên
- Đệ quy phải xác định được điểm dừng. Nếu không xác định chính xác thì bài toán sẽ bị sai và có thể lặp vĩnh cửu (Stack overhead)

```cpp
// Ví dụ hàm đệ quy tính giai thừa
int giaiThua(int n) {
	if(n <= 1) {
		return 1;
	}
	return n*giaiThua(n - 1);
}
```

- Cơ chế hoạt động của đệ quy tuân thủ theo LIFO (Last in first out) còn gọi là cơ chế Stack

### 1.1. Đệ quy tuyến tính

- Đệ quy tuyến tính là trường hợp hàm chỉ gọi lại chính nó một lần (Ví dụ làm đệ quy tính giai thừa bên trên)
- Giải thích

![đệ quy](./imgs/recursion.jpg)

![đệ quy 2](./imgs/recursion2.jpg)

### 1.2. Tail Recursion (Đệ quy đuôi)

- Đệ quy đuôi là một dạng đặc biệt của đệ quy tuyến tính, nó có dạng tương tự như dưới đây:

```cpp
int gcd(int m, int n) {
    int r;
    if(m < n) {
        return gcd(n, m);
    }
    r = m % n;
    if(r == 0) {
        return n;
    }else {
        return gcd(m, r);
    }
}
```

### 1.3 BINARY RECURSION (Đệ quy nhị phân)

- Được sử dụng khá phổ biến ví dụ như trong tìm kiếm nhị phân, ...
- Đệ quy nhị phân là dạng đệ quy gọi 2 lần chính nó tương tự như sau:

```js
int fibo(int n) {
    if(n < 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}
```

![Fibo work](./imgs/fibo.png)

### 1.4 Exponential recursion (Đệ quy đa tuyến)

- Đệ quy đa tuyến là trong một hàm có một vòng lặp nào đó mà trong vòng lặp nó lại gọi đệ quy của chính nó
- Độ phức tạp thường là O(a ^ n)

- Lưu ý khi chạy code tuần tự, nó sẽ lưu lại các biến local
- Khi gọi stack nó sẽ chạy tiếp lệnh chỉ thị trước khi gọi hàm đệ quy

![recursion work](./imgs/recustion3.jpg)

![recursion work](./imgs/recursion4.jpg)

![recursion work](./imgs/recursion5.jpg)

![recursion work](./imgs/recursion6.jpg)

![recursion work](./imgs/recursion7.jpg)

![recursion work](./imgs/recursion8.jpg)

![recursion work](./imgs/recursion9.jpg)

### 1.5 Nested recursion (Đệ quy lồng)

- Là loại đệ quy gọi đệ quy vào đối số của hàm đệ quy, tương tự.
  ![Đệ quy lồng](./imgs/de%20quy%20long.jpg)

### 1.6 MUTUAL RECURSION (Đệ quy tương hỗ)

- Đệ quy tương hỗ là loại đệ quy không gọi lại trực tiếp chính nó, mà gọi một hàm khác, trong hàm khác lại gọi lại nó, tương tự:

```Cpp
#include<iostream>
using namespace std;

bool isEven(int n);

bool isOdd(int n);

bool isEven(int n) {
	if(n == 0) {
		return true;
	}else {
		return isOdd(n - 1);
	}
}

bool isOdd(int n) {
	return !isEven(n);
}

int main() {
	cout << isEven(8);
}
```

![Đệ quy tương hỗ](./imgs/isEven.jpg)

### Bài tập rèn luyện, chuyển cơ số 10 sang cơ số 2

- Code

```cpp
#include <iostream>
using namespace std;

void convertDecimalToBinary(int n) {
	if(n > 0) {
		int soDu = n % 2;
		n /= 2;
		convertDecimalToBinary(n);
		cout << soDu << " ";
	}
}

int main(int argc, char** argv) {
	convertDecimalToBinary(10);
	return 0;
}
```

![Chuyển đổi nhị phân](./imgs/chuyenDoiNhiPhan.jpg)

### Tinh tổ hợp chập K của N

- Code

```cpp
#include <iostream>
using namespace std;

int choose(int n, int k) {
	if( k == 0 || n == k) return 1;
	return choose(n - 1, k) + choose(n - 1, k -1);
}

int main(int argc, char** argv) {
	cout << choose(5, 3);
	return 0;
}
```

=> Tự chạy bằng tay nhá

### Bài tập rèn luyện tháp Hà Nội

- Bài toán

![Bài toán tháp hn1](./imgs/thap%20ha%20noi.jpg)

![Bài toán tháp hn2](./imgs/thn2.jpg)

```cpp
#include <iostream>
using namespace std;

void move(int n, char A, char B, char C) {
	if(n == 1) {
		cout << A << " ==> " << C << "\n";
	}else {
		move(n - 1, A, C, B);
		cout << A << " ==> " << C << "\n";
		move(n - 1, B, A, C);
	}
}

int main(int argc, char** argv) {
	move(3, 'A', 'B', 'C');
	return 0;
}
```

- Chạy từng bước

![Bài toán tháp hn3](./imgs/thn3.jpg)

![Bài toán tháp hn4](./imgs/thn4.jpg)

![Bài toán tháp hn5](./imgs/thn5.jpg)

![Bài toán tháp hn6](./imgs/thn6.jpg)

- Lưu ý: Khi gọi đệ quy mà dưới nó không còn lệnh nào thì ta không cần phải lưu chỉ thị lệnh và các biến local vào trong stack

### Danh sách liên kết

1. Danh sách liên kết đơn chỉ sử dụng pHead

```cpp
#include <iostream>
using namespace std;

struct Node {
	int data;
	Node *pNext;
};

struct SingleList {
	Node *pHead;
};

void Initialize(SingleList &list) {
	list.pHead = NULL;
}

Node *CreateNode(int data) {
	Node *pNode = new Node;
	if(pNode != NULL) {
		pNode->data = data;
		pNode->pNext = NULL;
	}else {
		cout << "Cap phat bo nho that bai";
	}
	return pNode;
}

void PrintList(SingleList list) {
	Node *pTmp = list.pHead;
	if(pTmp == NULL) {
		cout << "Danh sach rong\n";
		return;
	}
	while(pTmp != NULL) {
		cout << pTmp->data << "\t";
		pTmp = pTmp->pNext;
	}
}

int SizeOfList(SingleList list) {
	Node *pTmp = list.pHead;
	int count = 0;
	while(pTmp != NULL) {
		count ++;
		pTmp = pTmp->pNext;
	}
	return count;
}

void InsertFirst(SingleList &list, int data) {
	Node *pNode = CreateNode(data);
	if(list.pHead == NULL) {
		list.pHead = pNode;
	}else {
		pNode->pNext = list.pHead;
		list.pHead = pNode;
	}
}

void InsertLast(SingleList &list, int data) {
	Node *pNode = CreateNode(data);

	if(list.pHead == NULL) {
		list.pHead = pNode;
	}else {
		Node *tmpNode = list.pHead;
		while(tmpNode->pNext != NULL) {
			tmpNode = tmpNode->pNext;
		}
		tmpNode->pNext = pNode;
	}
}

void InsertMid(SingleList &list, int position, int data) {
	if(position < 0 || position > SizeOfList(list) - 1) {
		cout << "Vi tri chen khong hop le!";
		return;
	}else if(position == 0) {
		InsertFirst(list, data);
	}else if(position == SizeOfList(list) - 1) {
		InsertLast(list, data);
	}else {
		Node *newNode = CreateNode(data);
		Node *tmpNode = list.pHead;
		Node *prevNode = NULL;
		int i = 0;
		while(tmpNode != NULL) {
			if(i == position) {
				break;
			}
			prevNode = tmpNode;
			tmpNode = tmpNode->pNext;
			i++;
		}
		prevNode->pNext = newNode;
		newNode->pNext = tmpNode;
	}
}

//Remove by position
void deleteNode(SingleList &list, int position) {
	int index = 0;
	Node *nodeDel = NULL;
	Node *prevNode = list.pHead;

	if(position < 0 || position > SizeOfList(list) - 1) {
		cout << "position is invalid, not a node is deleted\n";
		return;
	}

	if(list.pHead == NULL) {
		cout << "The list is empty\n";
		return;
	}

	if(position == 0) {
		list.pHead = prevNode->pNext;
		delete prevNode;
		prevNode = NULL;
		return;
	}

	while(index < position - 1) {
		prevNode = prevNode->pNext;
		index++;
	}

	nodeDel = prevNode->pNext;
	prevNode->pNext = nodeDel->pNext;
	delete nodeDel;
	nodeDel = NULL;
}

//Remove by data
void removeNode(SingleList &list, int data) {
	Node *nodeDel = list.pHead;
	if(nodeDel == NULL) {
		cout << "Danh sach rong!\n";
	}else {
		Node *prevNode = NULL;
		while(nodeDel != NULL) {
			if(nodeDel->data == data) {
				break;
			}
			prevNode = nodeDel;
			nodeDel=nodeDel->pNext;
		}
		if(nodeDel == NULL) {
			cout << "Khong tim thay gia tri" << endl;
		}else {
			if(nodeDel == list.pHead) {
				list.pHead = list.pHead->pNext;
				nodeDel->pNext = NULL;
				delete nodeDel;
				nodeDel = NULL;
			}else {
				prevNode->pNext = nodeDel->pNext;
				nodeDel->pNext = NULL;
				delete nodeDel;
				nodeDel = NULL;
			}
		}
	}
}

Node * SearchNode(SingleList list, int data) {
	Node *tmpNode = list.pHead;
	while(tmpNode != NULL) {
		if(tmpNode->data == data) {
			break;
		}
		tmpNode = tmpNode->pNext;
	}
	return tmpNode;
}

void SortList(SingleList list) {
	for(Node *tmpNode = list.pHead; tmpNode != NULL; tmpNode=tmpNode->pNext) {
		for(Node *tmpNode2 = tmpNode->pNext; tmpNode2 != NULL; tmpNode2=tmpNode2->pNext) {
			if(tmpNode->data > tmpNode2->data) {
				int tmp = tmpNode->data;
				tmpNode->data = tmpNode2->data;
				tmpNode2->data = tmp;
			}
		}
	}
}

void FreeList(SingleList &list) {
	while(list.pHead != NULL) {
		Node *tmpNode = list.pHead;
		list.pHead = tmpNode->pNext;
		tmpNode->pNext = NULL;
		delete tmpNode;
		tmpNode = NULL;
	}
	cout << "\nda giai phong bo nho" << endl;
}

int main(int argc, char** argv) {
	SingleList list;
	Initialize(list);
	InsertFirst(list, 12);
	InsertLast(list, 213);
	InsertLast(list, 23);
	InsertLast(list, 123);
	InsertLast(list, 1);
	SortList(list);
	PrintList(list);
	FreeList(list);
	PrintList(list);
	return 0;
}
```

- Lưu ý: C và C++ không tự động thu hồi bộ nhớ khi sử dụng từ khóa new, ... Thế nên cần giải phóng nó khi kết thúc chương trình

- Cách khác sử dụng con trỏ để tạo danh sách liên Kết

```js
#include <iostream>
using namespace std;

struct Node {
	int data;
	Node *pNext;
};

struct SingleList {
	Node *pHead;
};

void Initialize(SingleList *&list) {
	list = new SingleList;
	list->pHead = NULL;
}

Node *CreateNode(float data) {
	Node *newNode = new Node;
	if(newNode != NULL) {
		newNode->data = data;
		newNode->pNext = NULL;
	}else {
		cout << "Khoi tao node moi that bai";
	}
	return newNode;

}

void PrintList(SingleList *list) {
	Node *tmpNode = list->pHead;
	if(tmpNode == NULL) {
		cout << "danh sach trong";
		return;
	}
	while(tmpNode != NULL) {
		cout << tmpNode->data << "\t";
		tmpNode = tmpNode->pNext;
	}
}

int SizeOfList(SingleList *list) {
	Node *tmpNode = list->pHead;
	int count = 0;
	while(tmpNode != NULL) {
		tmpNode = tmpNode->pNext;
		count++;
	}
	return count;
}

void InsertFirst(SingleList *&list, float data) {
	Node *newNode = CreateNode(data);
	if(list->pHead == NULL) {
		list->pHead = newNode;
		return;
	}

	newNode->pNext = list->pHead;
	list->pHead = newNode;

}

void InsertLast(SingleList *&list, float data) {
	Node *newNode = CreateNode(data);
	if(list->pHead == NULL) {
		list->pHead = newNode;
		return;
	}

 	Node *lastNode = list->pHead;
	while(lastNode->pNext != NULL) {
		lastNode = lastNode->pNext;
	}
	lastNode->pNext = newNode;
}

void InsertByPosition(SingleList *&list, float data, int position) {
	int sizeList = SizeOfList(list);
	if(position < 0  || position > sizeList) {
		cout << "vi tri chen khong hop le";
		return;
	}

	if(position == 0) {
		InsertFirst(list, data);
		return;
	}

	if(position == sizeList - 1) {
		InsertLast(list, data);
		return;
	}

	Node *prevNode = NULL;
	Node *newNode = CreateNode(data);
	Node *insNode = list->pHead;
	int index = 0;
	while(insNode != NULL) {
		if(position == index) {
			break;
		}
		prevNode = insNode;
		insNode = insNode->pNext;
		index++;
	}
	newNode->pNext = insNode;
	prevNode->pNext = newNode;

}

int main(int argc, char** argv) {
	SingleList *list;
	Initialize(list);
	InsertLast(list, 100);
	InsertLast(list, 200);
	InsertLast(list, 300);
	InsertByPosition(list, 1200, 1);
	PrintList(list);
	return 0;
}
```

### Bài tập tự luyện con trỏ

- Cho một sinh viên có cấu trúc: mã (int), tên (char\*). Dùng danh sách liên kết đơn với con trỏ phead để thao tác

1. Khởi tạo list dạng con trỏ
2. Thêm node vào cuối danh sách
3. Sắp xếp theo mã
4. Xóa node

```js
#include<iostream>
#include<string.h>
#include<stdio.h>
using namespace std;

struct SinhVien{
	int ma;
	char ten[150];
};

struct Node {
	SinhVien *data;
	Node *pNext;
};

struct SingleList {
	Node *pHead;
};

void InitializeList(SingleList *&list) {
	list = new SingleList;
	list->pHead = NULL;
}

Node *CreateNode(SinhVien *sv) {
	Node *pNode = new Node;
	if(pNode != NULL) {
		pNode->data = sv;
		pNode->pNext = NULL;
	}else {
		cout << "cap phat bo nho that bai";
	}
	return pNode;
}

SinhVien *NhapSinhVien() {
	SinhVien *sv = new SinhVien;
	cout << "Ma: ";
	cin >> sv->ma;
	cin.ignore();
	cout << "Ten: ";
	gets(sv->ten);
	return sv;
}

void InsertLast(SingleList *&list, SinhVien *sv) {
	Node *pNode = CreateNode(sv);
	if(list->pHead == NULL) {
		list->pHead = pNode;
	}else {
		Node *pTmp = list->pHead;
		while(pTmp->pNext != NULL) {
			pTmp = pTmp->pNext;
		}
		pTmp->pNext = pNode;
	}
}

void PrintList(SingleList *list) {
	Node *pTmp = list->pHead;
	if(pTmp == NULL) {
		cout << "Danh sach rong";
		return;
	}

	while(pTmp != NULL) {
		SinhVien *sv = pTmp->data;
		cout << sv->ma << "\t" << sv->ten << "\n";
		pTmp = pTmp->pNext;
	}
}

void SortList(SingleList *&list) {
	for(Node *pTmp = list->pHead; pTmp != NULL; pTmp = pTmp->pNext) {
		for(Node *pTmp2 = pTmp->pNext; pTmp2 != NULL; pTmp2 = pTmp2->pNext) {
			SinhVien *svTmp = pTmp->data;
			SinhVien *svTmp2 = pTmp2->data;
			if(svTmp->ma > svTmp2->ma) {
				int ma = svTmp->ma;
				char ten[150];
				strcpy(ten, svTmp->ten);

				svTmp->ma = svTmp2->ma;
				strcpy(svTmp->ten, svTmp2->ten);
				svTmp2->ma = ma;
				strcpy(svTmp2->ten, ten);

			}
		}
	}
}

void RemoveNode(SingleList *&list, int ma) {
	Node *pDel = list->pHead;
	if(pDel == NULL) {
		cout << "Danh sach rong";
	}else {
		Node *pPrev = NULL;
		while(pDel != NULL) {
			SinhVien *sv = pDel->data;
			if(sv->ma == ma ) {
				break;
			}
			pPrev = pDel;
			pDel = pDel->pNext;
		}
		if(pDel == NULL) {
			cout << "Khong thay ma sinh vien" << ma;
		}else {
			if(pDel == list->pHead) {
				list->pHead = list->pHead->pNext;
				pDel->pNext = NULL;
				delete pDel;
				pDel = NULL;
			}else {
				pPrev->pNext = pDel->pNext;
				pDel->pNext=NULL;
				delete pDel;
				pDel = NULL;
			}
		}
	}
}

int main(int argc, char ** argv) {
	SingleList *list;
	InitializeList(list);
	SinhVien *teo = NhapSinhVien();
	InsertLast(list, teo);
	SinhVien *ty = NhapSinhVien();
	InsertLast(list, ty);
	PrintList(list);
	return 0;
}

using namespace std;
```

### Danh sách liên kết đơn với PTail

```js
#include<iostream>
using namespace std;

struct Node {
	int data;
	Node *pNext;
};

struct SingleList {
	Node *pHead;
	Node *pTail;
};

void Initialize(SingleList &list) {
	list.pHead = list.pTail = NULL;
}

Node *CreateNode(int data) {
	Node *newNode = new Node;
	if(newNode == NULL) {
		cout << "cap phat bo nho that bai" << "\n";
	}else {
		newNode->data = data;
		newNode->pNext = NULL;
	}
	return newNode;
}

void PrinList(SingleList list) {
	Node *tmpNode = list.pHead;
	if(tmpNode == NULL) {
		cout << "danh sach rong" << endl;
	}else {
		while(tmpNode != NULL) {
			cout << tmpNode->data << "\t";
			tmpNode = tmpNode->pNext;
		}
	}
}

int SizeOfList(SingleList list) {
	Node *tmpNode = list.pHead;
	int count = 0;
	while(tmpNode != NULL) {
		count ++;
		tmpNode = tmpNode->pNext;
	}
	return count;
}

void InsertFirst(SingleList &list, int data) {
	Node *newNode = CreateNode(data);
	if(list.pHead == NULL) {
		list.pHead = list.pTail = newNode;
		return;
	}
	newNode->pNext = list.pHead;
	list.pHead = newNode;
}

void InsertLast(SingleList &list, int data) {
	Node *newNode = CreateNode(data);
	if(list.pTail == NULL) {
		list.pHead = list.pTail = newNode;
		return;
	}
	list.pTail->pNext = newNode;
	list.pTail = newNode;
}

void RemoveNode(SingleList &list, int data) {
	Node *pDel = list.pHead;
	if(pDel == NULL) {
		cout << "The list is empty";
	}else {
		Node *pPre = NULL;

		while(pDel != NULL) {
			if(pDel->data == data) {
				break;
			}
			pPre = pDel;
			pDel = pDel->pNext;
		}

		if(pDel == NULL) {
			cout << "Could not found number!";
		}else {
			if(pDel == list.pHead) {
				list.pHead = list.pHead->pNext;
				pDel->pNext = NULL;
				delete pDel;
				pDel = NULL;
			}else if(pDel->pNext == NULL) {
				list.pTail = pPre;
				pPre->pNext = NULL;
				delete pDel;
				pDel = NULL;
			}else {
				pPre->pNext = pDel->pNext;
				pDel->pNext = NULL;
				delete pDel;
				pDel = NULL;
			}
		}
	}
}

int main(int argc, char **argv) {
	SingleList list;
	Initialize(list);
	InsertLast(list, 7);
	InsertLast(list, 10);
	InsertLast(list, 20);
	InsertLast(list, 15);
	InsertLast(list, 16);
	RemoveNode(list, 20);
	PrinList(list);
	return 0;
}
```

# Tree trong cấu trúc dữ liệu và giải thuật

### Binary Tree (Cây nhị phân)

A. Các phép duyệt cây:

1. Duyệt theo thứ tự trước: PreOder(N - L - R)

2. Duyệt theo thứ tự giữa: InOder(L - N - R)

3. Duyệt theo thứ tự sau: PostOrder(L - R - N)

- Để nhớ thứ tự này có phương pháp sau
  - Tên của các phép duyệt cây chính là thứ tự của N
  - L luôn đứng trước R

B. Tính chất của cây nhị phân

- Số node tối đa tại level `l` là 2^l
- Số lượng node tối đa trong một cây nhị phân có chiều cao `h` là `2^h - 1`
  - Chiều cao của cây là số node tối đa từ gốc tới lá
- Trong một cây nhị phân với N node, chiều cao tối thiếu hoặc level là `log2(N+1)`

- Một cây có L lá sẽ có ít nhất `Log2L + 1` levels

C. Phân loại cây nhị phân

1. Full Binary Tree (Cây nhị phân đầy đủ)

- Nếu mọi node của cây đều có 0 hoặc 2 con
- Chúng ta có thể nói rằng cây nhị phân đầy đủ là cây có tất cả các node đều có 2 node con (Trừ các node lá)

2. Complete Binary Tree
   ... Còn nhiều lắm, lên google để tìm hiểu thêm

```cpp
#include<iostream>

using namespace std;

struct Node {
	char data;
	Node *pRight;
	Node *pLeft;
};

Node *CreateNode(char data) {
	Node *newNode = new Node();
	if(!newNode) {
		cout << "Memory Err\n";
		return NULL;
	}
	newNode->data = data;
	newNode->pLeft = newNode->pRight = NULL;
	return newNode;
}

void traversePreOrder(Node *temp) {
  if (temp != NULL) {
    cout << " " << temp->data;
    traversePreOrder(temp->pLeft);
    traversePreOrder(temp->pRight);
  }
}

void traverseInOrder(Node *temp) {
	if(temp != NULL) {
		traverseInOrder(temp->pLeft);
		cout << " " << temp->data;
    	traverseInOrder(temp->pRight);
	}
}

void traversePostOrder(Node *temp) {
	if(temp != NULL) {
		traversePostOrder(temp->pLeft);
    	traversePostOrder(temp->pRight);
    	cout << " " << temp->data;
	}
}


int main() {
	Node *root = CreateNode('A');
  	root->pLeft = CreateNode('C');
  	root->pLeft->pLeft = CreateNode('G');
  	root->pLeft->pRight = CreateNode('F');
  	root->pLeft->pLeft->pRight = CreateNode('I');
  	root->pRight = CreateNode('B');
  	root->pRight->pRight = CreateNode('D');
  	root->pRight->pLeft = CreateNode('E');
  	root->pRight->pRight->pLeft = CreateNode('H');
  	cout << "preOrder traversal: ";
  	traversePreOrder(root);
  	cout << "\ninOrder traversal: ";
  	traverseInOrder(root);
  	cout << "\npostOrder traversal: ";
  	traversePostOrder(root);
}
```
