##  noExplicitAny:

Typescript'teki `any`, type sisteminden tehlikeli bir "escape hatch" dır. `any` kullanmak, birçok tür denetimi kuralını devre dışı bırakır ve genellikle en iyi şekilde yalnızca son çare olarak veya kodu prototiplerken kullanılır. Bu kural, `type annotation` olarak `any` anahtar sözcüğünün açık kullanımlarını bildirir.

## Generics:

Farklı veri türleriyle çalışabilen reusable kod oluşturmaya olanak tanır. Generic,  `functions`, `classes` ve `interfaces` tanımlayabilirsiniz.

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

```typescript
interface Dictionary<T> {
  [key: string]: T;
}
```

```typescript
class KeyValuePair<T, U>{
    private key: T;
    private val: U;
}
```

```typescript
function identity(arg: any): any {
  return arg;
}
```

#### Type vs Any

İlk işlev `identity(arg: any): any` herhangi bir bağımsız değişken türünü kabul eder ve herhangi bir tür kontrolü veya tür güvenliği olmadan olduğu gibi döndürür. Bu, dönüş değerinin `null` ve `undefined` dahil olmak üzere herhangi bir türde olabileceği anlamına gelir..

İkinci işlev `identity<Type>(arg: Type): Type` Type her türlü bağımsız değişkeni de kabul eder, ancak tür güvenliğini zorlamak için `Type` generic type parametresi kullanır. İşlevi çağırdığınızda, ilettiğiniz bağımsız değişkenin türünü belirtmeniz gerekir ve TypeScript, dönüş değerinin aynı türde olmasını sağlar.

```typescript
identity(42) --> any generic
identity<number>(42) --> type generic
```

## Enums:

Bir constant grubunu temsil eden özel bir "sınıf" tır.

| Numeric enums                                                | String enums                                                 | Heterogeneous enums                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Default: Varsayılan olarak, numaralandırmalar ilk değeri 0 olarak başlatır ve her ek değere 1 ekler: | Numaralandırmalar `string` de içerebilir. Bu, okunabilirlikleri nedeniyle sayısal numaralandırmalardan daha yaygındır. | Teknik olarak numaralandırmalar dize ve sayısal üyelerle karıştırılabilir ancak bunu yapmak önerilmez. |
| Initialized: İlk sayısal numaralandırmanın değerini ayarlayabilir ve bundan otomatik olarak artmasını sağlayabilirsiniz: |                                                              |                                                              |
| Fully Initialized: Her numaralandırma değeri için benzersiz numara değerleri atayabilirsiniz. Ardından değerler otomatik olarak artmaz: |                                                              |                                                              |

```typescript
/*String Enums*/
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
/*Initialized Enums*/
enum CardinalDirections {
  North = 5,
  East,
  South,
  West
}
/*Heterogeneous enums*/
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}
```

## Deep Dive Functions:

```typescript
//Bu işlevle sayı ekleyeceğinizi söyleyen hiçbir şey olmasa, herhangi bir şey ekleyebilirsiniz.
function add(a, b){
  return a + b;
}

//Bu işlevi uyguladığımızda sadece sayılarla çalışır:
function add(a: number, b: number): number{
  return a + b;
}

```

- TypeScript, bu işlevi kod yazarının tasarladığı gibi çağırdığımızdan emin olacak ve böylece daha önce `NaN` ile sonuçlanan istenmeyen durumlardan kaçınacaktır.

- TypeScript derleyicisi, iki sayı eklemenin ortaya çıkan işleminin türünün başka bir sayı olacağı sonucuna varabilir. Bu döndürülen değerin türünü atlayabileceğimiz anlamına gelir.

```typescript
const add = (a: number, b: number) => a + b;

```

### Optional Parameters:

```typescript
function log(msg: string, userId?: string){
  console.log(new Date(), msg, userId ?? 'anonymous user');
}

function log(msg: string, userId: string | undefined){
  console.log(new Date(), msg, userId ?? 'anonymous user');
}
// get userId from user management system
// because the user isn't logged in the system
// returns undefined
const userId = undefined;
log("Navigated to home page", userId);
```

- Optional parametrelerin her zaman bir işlev parametresi listesinin sonunda declaration gerekir.

### Default Parameters:

```typescript
function log(msg: string, userId = 'anonymous user'){
  console.log(new Date(), msg, userId);
}

log("Navigated to about page");
log("Sorted inventory table", undefined);
log("Purchased book #1232432498", "123fab");
```

###  Rest Parameters:

*Variadik bir fonksiyon*, bir fonksiyonun herhangi bir sayıda argüman alabileceğini söylemenin başka bir süslü yolu olan *belirsizlik arity'sine* sahip bir fonksiyonun süslü adıdır.

```typescript
function log(...msgs){
  console.log(new Date(), ...msgs);
}
// Typed as an array
function log(...msgs: string[]){
  console.log(new Date(), ...msgs);
}
```

## Typing Function As Values

JavaScript, işlevlere ve işlevleri etrafta dolaştırmak ve diğer işlevlerden döndürmek için değer olarak kullanmaya çok, çok düşkündür.

```typescript
// Inline
const add = (a: number, b: number) => a + b; //typeof add = number

//or With full type definition
const add : (a: number, b: number) => number = (a, b) => a + b; 
//Bir işlevi depolamanız gerektiğinde ve daha üst düzey işlevlerle çalışırken kullanışlıdır. --> Daha yüksek dereceli bir işlev, başka bir işlevi paremetre olarak alan veya bir işlev döndüren bir işlevdir. Örn:

// Takes a function as a argument
function logMaybe( // <-- Yüksek Dereceli Fonksiyon
  shouldLog: () => boolean,
  msg: string){
    if (shouldLog()) console.log(msg);
}

//or using an alias
type Add = (a: number, b: number) => number
const add : Add = (a, b) => a + b;
```

## Function Overloading

TypeScript, yazma işlevinin aşırı yüklenmesinin yükünü bir şekilde azaltmaya çalışır, ancak hala JavaScript'in bir üst kümesi olduğu için tam olarak oraya ulaşamaz. TypeScript'te işlev aşırı yüklemesinin gerçekten hoş olan kısmı, türler dünyasıyla ilgili olanıdır.

```typescript
type Log = {
  (msg: string, id: string): void
  (msg: number, id: string): void
}
```

## Argument Destructuring

```typescript
function castIceCone(caster, options) {  
    caster.mana -= options.mana;  
    console.log(`${caster} spends ${options.mana} mana  and casts a terrible ice cone ${options.direction}`); }

castIceCone('Jaime', {mana: 10, direction: "towards the upstairs' neighbors balcony for greater justice"});
// => Jaime spends 10 mana and casts a terrible ice cone
// towars the upstairs' neighbors balcony for greater justice

//Destructing
function castIceCone(
  caster: SpellCaster, 
  {mana=1, direction="forward"}={} : {mana?: number, direction?:string} 
  ): void {
  caster.mana -= mana;
  console.log(`${caster} spends ${mana} mana 
and casts a terrible ice cone ${direction}``);
} 

//or
type IceConeOptions = {mana?: number, direction?: string}
function castIceCone(
  caster: SpellCaster, 
  {mana=1, direction="forward"}={} : IceConeOptions): void {
  caster.mana -= mana;
  console.log(`${caster} spends ${mana} mana 
and casts a terrible ice cone ${direction}`);
}

//or
type castIceCone = (caster: SpellCaster, options: IceConeOptions) => void;
const castIceCone : castIceCone = (
  caster, 
  { mana = 1, direction = "forward" } = {}
  ) => {
  caster.mana -= mana;
  console.log(`${caster} spends ${mana} mana 
and casts a terrible ice cone ${direction}`);
}

```

JavaScript'te alışkın olduğunuz işlev desenleri TypeScript'te desteklenir. Bazı bağımsız değişkenleri alabilen veya alamayan işlevleri tanımlamak için **isteğe bağlı parametreleri** kullanabilirsiniz. **Varsayılan paramlar, rest param'lar ve bağımsız değişken yok etme** ile tür güvenli işlevler yazabilirsiniz. **İşlev aşırı yüklemeleri yazmak için JavaScript'te** olduğundan çok daha iyi bir desteğiniz bile var. Ayrıca, işlev türlerini, daha üst düzey işlevler yazarken sıklıkla kullanacağınız bir değer olarak ifade etme olanağına sahipsiniz.

Özetle, TypeScript daha sağlam ve sürdürülebilir işlevler yazmanıza yardımcı olacak inanılmaz özelliklere sahiptir.

## Deep Dive Inheritance and Extends Keyword

### Class:

```typescript
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
 
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) { // --overriding
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
 
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) { // --> overriding
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}
 
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
 
sam.move();
tom.move(34);
```

## Inheritance:

Classlar temel sınıflardan özellikleri ve yöntemleri devralır.

Constructor'ın bodysinde `this` konuda bir mülke *erişmeden* önce, `super()`) *demeliyiz.* Bu, TypeScript'in uygulayacağı önemli bir kuraldır.

### Public, private, and protected modifiers

<u>Public:</u>

- Public Inheritance: Typescript'teki default inheritance türüdür. Public olarak işaretlenmiş üst sınıfın tüm özelliklerine ve yöntemlerine alt sınıf tarafından erişilebilir. Bir sınıfın herkese açık üyelerine sınıfın dışından da erişilebilir.

<u>Private:</u>

-  Private Inheritance: Private üyelere yalnızca tanımlandıkları sınıf içinde erişilebilir. Bir üst sınıfın private üyelerine alt sınıfları tarafından erişilemez.

<u>Protected</u>

- Protected Inheritance: Protected üyelere yalnızca sınıf ve alt sınıfları içinde erişilebilir. Bir üst sınıfın protected üyelerine alt sınıfları tarafından erişilebilir, ancak üst sınıfın örnekleri tarafından veya sınıf hiyerarşisinin dışından erişilemez.

<u>Readonly modifier:</u>

Salt okunur anahtar sözcüğünü kullanarak özellikleri `readonly` yapabilirsiniz. Salt okunur özellikler, declaration veya constructorda başlatılmalıdır.

```typescript
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
		this.name = theName;
  }
}
```

<u>Parameter Properties:</u>

*Parametre özellikleri*, bir üyeyi tek bir yerde oluşturmanıza ve başlatmanıza olanak tanır.

```typescript
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}
 
let dad = new Octopus("Man with the 8 strong legs");
dad.name;
```

### Accessors:

- Get/set: Bu, her nesnede bir üyeye nasıl erişildiği üzerinde daha ince bir denetime sahip olmanın bir yolunu sunar.

  ```typescript
    get fullName(): string {
      return this._fullName;
    }
    set fullName(newName: string) {
      if (newName && newName.length > fullNameMaxLength) {
        throw new Error("fullName has a max length of " + fullNameMaxLength);
      }
  ```

### Static Properties:

TypeScript'te statik özellikler, sınıfın örneklerine değil, sınıfın kendisine ait olan özelliklerdir. Bunlara sınıfın bir örneği yerine sınıf adı kullanılarak erişilir.

```typescript
class MyClass {
  static myStaticProperty: string = "Hello, World!";

  static myStaticMethod() {
    console.log(MyClass.myStaticProperty);
  }
}
console.log(MyClass.myStaticProperty); // "Hello, World!"
MyClass.myStaticMethod(); // "Hello, World!"
```

### Abstract Classes:

Soyut sınıflar, diğer sınıfların türetilebileceği temel sınıflardır. Doğrudan örnekleri oluşturulmayabilir. Bir arabirimden farklı olarak, soyut bir sınıf üyeleri için uygulama ayrıntıları içerebilir. Soyut olarak işaretlenmiş soyut sınıf içindeki yöntemler bir uygulama içermez ve türetilmiş sınıflarda uygulanmalıdır.

## Advanced Techniques:

### Constructor Functions:

TypeScript'te bir sınıf bildirdiğinizde, aslında aynı anda birden çok bildirim oluşturmuş olursunuz. Birincisi, sınıfın *örneğinin* türüdür.

Her sınıfı düşünmenin bir başka yolu, bir *örnek* tarafı ve *statik* bir taraf olmasıdır.

## Using a class as an interface:

Bir sınıf bildirimi iki şey yaratır: sınıfın örneklerini temsil eden bir tür ve bir yapıcı işlev. Sınıflar türler oluşturduğundan, bunları ara birimleri kullanabileceğiniz yerlerde kullanabilirsiniz.

```typescript
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
```

## Architecture Filing (Enums, Classes, Models)

TypeScript'te modelleri, enumları ve sınıfları düzenlerken, net ve sürdürülebilir bir mimari sağlamak için izlenebilecek birkaç yaygın uygulama vardır. İşte bazı öneriler:

1. Modeller: Modeller genellikle uygulamadaki verileri temsil etmek için kullanılır. /models gibi ayrı bir dizinde `/models` her model kendi dosyasında tanımlanır. Modelleri, yalnızca veri özelliklerini ve muhtemelen verileri işlemek için bazı yardımcı yöntemleri içeren, mümkün olduğunca basit tutmak iyi bir uygulamadır.
2. Enums: Enumlar, TypeScript'te bir dizi adlandırılmış sabiti tanımlamak için kullanılır. `/enums` gibi ayrı bir dizinde düzenlenebilirler ve her enum kendi dosyasında tanımlanır. Her enuma açıklayıcı bir ad vermek ve enumun değerlerini mantıksal bir sırada tutmak iyi bir uygulamadır.
3. Sınıflar: Sınıflar, uygulamadaki daha karmaşık nesneleri temsil etmek için kullanılır. /classes gibi ayrı bir dizinde `/classes` her sınıf kendi dosyasında tanımlanır. Tek Sorumluluk İlkesi'ni (SRP) takip etmek ve her sınıfın tek bir sorumluluğa odaklanmasını sağlamak iyi bir uygulamadır. Ayrıca, sınıfın yapıcı parametrelerini minimumda tutmak ve bağımlılıkları sağlamak için bağımlılık enjeksiyonu kullanmak önemlidir.

## Hot Reload and Watching

- TypeScript, değişiklik yapıldığında kodu otomatik olarak yeniden derlemek için kullanılabilecek bir saat modu sağlar. Bu modu kullanmak için, terminalde `tsc --watch` komutunu çalıştırmanız yeterlidir

- TypeScript kodunda her değişiklik yapıldığında sunucuyu otomatik olarak yeniden başlatmak için nodemon'ı kullanabilirsiniz. Nodemon'ı kullanmak için, `npm install nodemon --save-dev` komutunu kullanarak yükleyin ve ardından sunucuyu başlatmak için terminalde `nodemon` çalıştırın.

- ts-node-dev, Node.js uygulamalarında TypeScript kodunun etkin bir şekilde yeniden yüklenmesini ve izlenmesini sağlamak için kullanılabilecek bir geliştirme aracıdır. ts-node-dev'i kullanmak için, npm install ts-node-dev --save-dev komutunu kullanarak yükleyin ve ardından sunucuyu başlatmak için terminalde `ts-node-dev <entry-file>` komutunu çalıştırın.`npm install ts-node-dev --save-dev`

## Commands

1. `tsc`: Bu komut, TypeScript kodunu JavaScript'e derlemek için kullanılır. `tsc` herhangi bir bağımsız değişken olmadan çalıştırmak, geçerli dizindeki ve alt dizinlerindeki tüm TypeScript dosyalarını derler ve derlenmiş JavaScript dosyalarını karşılık gelen bir dizine çıkarır. Tsc'yi çalıştırarak derlenecek belirli bir TypeScript dosyası da belirtebilirsiniz `tsc <file-name>`.
2. `tsc --watch`: Bu komut, her değişiklik yapıldığında TypeScript kodunu otomatik olarak yeniden derlemek için kullanılır. `tsc --watch` komutunu çalıştırmak, TypeScript derleyicisini izleme modunda başlatır ve bu da dosyaları her değiştirildiğinde otomatik olarak yeniden derler. Bu, geliştirme sırasında kullanmak için yararlı bir komuttur.
3. `npm start`: Bu komut, bir Node.js uygulamasını başlatmak için kullanılır. Genellikle `package.json` dosyasının `scripts` bölümünde tanımlanır ve terminale `npm start` yazılarak çalıştırılabilir. Özel başlatma komutlarını `scripts` bölümüne ekleyerek de tanımlayabilirsiniz.
4. `npm test`: Bu komut, TypeScript projesi için testleri çalıştırmak için kullanılır. Genellikle bir `package.json` dosyasının `scripts` bölümünde tanımlanır ve terminale `npm test` yazılarak çalıştırılabilir. Özel test komutlarını `scripts` bölümüne ekleyerek de tanımlayabilirsiniz.
5. `npm install <package-name> --save`: Bu komut, npm kayıt defterinden bir paket yüklemek ve `package.json` dosyasına bağımlılık olarak kaydetmek için kullanılır. Yüklenecek birden çok paketi boşluklarla ayırarak belirtebilirsiniz