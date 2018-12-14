void setup() {

pinMode(9,OUTPUT);
pinMode(10,OUTPUT);
pinMode(11,OUTPUT);
pinMode(12,OUTPUT);

}

void loop() {
digitalWrite(9,HIGH);
digitalWrite(10,HIGH);
delay(1000);
digitalWrite(11,HIGH);
digitalWrite(12,HIGH);
delay(2000);
digitalWrite(10,HIGH);
digitalWrite(9,HIGH);
delay(1500);
digitalWrite(12,HIGH);
digitalWrite(11,HIGH);
delay(1000);

}
